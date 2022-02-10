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
    reutrn this.lineItems.reduce((total, item) => total + item.qty, 0);
})

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});


module.exports = mongoose.model('Order', orderSchema);