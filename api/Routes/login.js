const express = require('express')
const loginRoute = express.Router()
const mongoose = require('mongoose')
const jwtKey = 'adjfvaiywvfadvclisgwef3563ewtw4yterwyheshuejh'

const RegisterUsers = require('../mongoModels/RegisterUsers.js')
const jwt = require('jsonwebtoken')



loginRoute.post('/login', async(req,res) => {
   const {email,password} = req.body;
   const alreadyUser = await RegisterUsers.findOne({email:email})
   if(!alreadyUser) {
    return res.json('user does not Exists')
   }
   if(password !== alreadyUser.password) {
    return res.json('Paaword Incorrect')
   }

   jwt.sign({email:alreadyUser.email,name:alreadyUser.name}, jwtKey,{}, (err, token) => {
    if (err) throw err;
    res.cookie('token', token,{sameSite:'none', secure:true}).json({email:alreadyUser.email,name:alreadyUser.name})

   })
   
})

loginRoute.post('/logout', (req,res) => {
   res.cookie('token','').json('done')
})

module.exports = loginRoute
