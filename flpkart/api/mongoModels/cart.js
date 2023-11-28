const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    itemid: String,
    userid:String,
    itemquantity:Number,
    uniqueid:String,
})

const carts = mongoose.model('carts', cartSchema)
module.exports = carts;