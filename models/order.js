const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
  qty: {type: Number, default: 1},
  item: itemSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

// Calculate the Total Price of each line item
lineItemSchema.virtual('exitPrice').get(function() {
    return this.qty * this.item.price;
}); 

const orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  lineItems: [lineItemSchema],
  isPaid: {type: Boolean, default: false}
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.exitPrice, 0);
})

orderSchema.virtual('totalQty').get(function() {
    return this.lineItems.reduce((total, item) => total + item.qty, 0);
})

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.methods.addItemToCart = async function(itemId) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const item = await mongoose.model('Item').findById(itemId);
    cart.lineItems.push({ item });
  }
  return cart.save();
};

orderSchema.statics.getCart = function (userId) {
  // Either return a brand new cart or the user's updated cart
  return this.findOneAndUpdate(
    // 1st Parameter (Query): Find User Order that isn't paid
    {user: userId, isPaid: false},
    // 2nd Parameter (If you find on then Update): Create a new Order that has a User property with a default of is:false
    { user: userId },
    // Third Parameter (Overrides findOneAndUpdate return default -> to return the updated Data)
    { upsert: true, new: true}
  );
};

module.exports = mongoose.model('Order', orderSchema);