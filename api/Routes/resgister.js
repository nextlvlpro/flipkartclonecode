const express = require('express')
const resgisterRoute = express.Router()
const mongoose = require('mongoose')

const RegisterUsers = require('../mongoModels/RegisterUsers.js')



resgisterRoute.post('/register', async(req,res) => {
   const {name,email,password} = req.body;

   const alreadyUser = await RegisterUsers.find({email:email})
   if(!!alreadyUser.length>0) {
    return res.json('user Already Exists')
   }

   const newUser = await RegisterUsers.create({
    name,
    email,
    password
   })
   res.json('done')
})

module.exports = resgisterRoute
