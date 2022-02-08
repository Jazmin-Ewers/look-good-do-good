require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'TOPS', sortOrder: 1},
    {name: 'PANTS', sortOrder: 2},
    {name: 'DENIM', sortOrder: 3},
    {name: 'SWEATERS', sortOrder: 4},
    {name: 'COATS', sortOrder: 5},
    {name: 'SHOES', sortOrder: 6},
    {name: 'ACCESSORIES', sortOrder: 7},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([ 
    {name: 'The Work Jacket', description: '100% cotton, made baggy for comfort', mainimageurl: 'https://i.imgur.com/rCUku81.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[0], price: 50.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[0], price: 50.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[0], price: 50.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[1], price: 60.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[1], price: 60.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[1], price: 60.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[2], price: 70.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[2], price: 70.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[3], price: 70.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[3], price: 80.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[3], price: 80.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[4], price: 80.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[4], price: 90.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[4], price: 90.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[5], price: 100.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[5], price: 100.00},
    {name: 'Corporate Cool', description: '100% silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[5], price: 100.00},
  ]);

  console.log(items)

  process.exit();

})();