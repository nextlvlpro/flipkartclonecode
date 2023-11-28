const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    itemname: String,
    category:String,
    subcategory:String,
    additionalcategory:String,
    shownprice:Number,
    falseprice:Number,
    discount:Boolean,
    bestseller:Boolean,
    specs:String,
    url:String
})

const Products = mongoose.model('products', productSchema)
module.exports = Products;