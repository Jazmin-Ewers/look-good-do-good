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
    {name: 'The Work Jacket', description: '100% recycle cotton, made baggy for comfort', mainimageurl: 'https://i.imgur.com/rCUku81.png' , detailimageurl:'https://i.imgur.com/YEIdsMW.png' ,category: categories[0], price: 79.00},
    {name: 'Corporate Cool', description: '100% recycle silk, 100% office-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/aLDGiwa.png' ,category: categories[0], price: 59.00},
    {name: 'Casual Soft Blouse', description: '100% recycle cotton, made for a casual night in or out', mainimageurl: 'https://i.imgur.com/was95Tm.png' , detailimageurl:'https://i.imgur.com/EIjIVMp.png' ,category: categories[0], price: 49.00},
    {name: 'Standout Top', description: '100% recycle silk, 100% night out ready', mainimageurl: 'https://i.imgur.com/KebXIfk.png' , detailimageurl:'https://i.imgur.com/TtbjXed.png' ,category: categories[1], price: 59.00},
    {name: 'Sweater Vest', description: '100% recycle wool, made for cool nights', mainimageurl: 'https://i.imgur.com/NnfyAT5.png' , detailimageurl:'https://i.imgur.com/gP3UGno.png' ,category: categories[1], price: 68.00},
    {name: 'Soft Flowing Dress', description: '100% silk, made for walks by the beach', mainimageurl: 'https://i.imgur.com/dhQQxEW.png' , detailimageurl:'https://i.imgur.com/VV3IQld.png' ,category: categories[1], price: 79.00},
    {name: 'Breezy Blouse', description: '100% silk, 100% summer-ready', mainimageurl: 'https://i.imgur.com/ClOMtif.png' , detailimageurl:'https://i.imgur.com/PYlXKmD.png' ,category: categories[2], price: 79.00},
    {name: 'Beautiful Flowing Dress', description: '100% silk, for long walks on the boardwalk', mainimageurl: 'https://i.imgur.com/o86xWXM.png' , detailimageurl:'https://i.imgur.com/TkX3s2V.png' ,category: categories[2], price: 59.00},
    {name: 'The Go-to Dress', description: '100% recycle wool, 100% ready for anything', mainimageurl: 'https://i.imgur.com/jh65MLL.png' , detailimageurl:'https://i.imgur.com/Jk4PDHS.png' ,category: categories[3], price: 99.00},
  ]);

  console.log(items)

  process.exit();

})();