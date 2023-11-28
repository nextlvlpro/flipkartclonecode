const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    itemid: String,
    userid:String,
    itemquantity:Number,
    uniqueid:String,
})

const orders = mongoose.model('orders', ordersSchema)
module.exports = orders;