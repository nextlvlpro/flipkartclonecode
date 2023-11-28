const mongoose = require("mongoose");

const RegisterUsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    
})

const RegisterUsers = mongoose.model('RegisterUsers', RegisterUsersSchema)
module.exports = RegisterUsers;