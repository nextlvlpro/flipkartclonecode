const express = require('express')
const ordersRoute = express.Router()
const mongoose = require('mongoose')
const cart = require('../mongoModels/cart')
const products = require('../mongoModels/products')
const orders = require('../mongoModels/orders')



ordersRoute.post('/neworder', async (req,res) => {
    const uniqueid = req.body.id + req.body.user
   

    const IfinCart = await cart.findOne({uniqueid:uniqueid})
    if(IfinCart) {
        const deleteFromCart = await cart.findOneAndDelete({uniqueid:uniqueid})
    }
    
    const newOrder = await orders.create({
        itemid: req.body.id,
        userid:req.body.user,
        itemquantity:req.body.itemquantity,
        uniqueid:req.body.id + req.body.user,
    
    })

    res.json('done')
})


ordersRoute.post('/allorder', async (req,res) => {
    const email = req.body
   
    const allorders = await orders.find({userid:email.email})

    res.json(allorders)
})

ordersRoute.post('/productsbyid',async (req,res) => {
    const reqitems = req.body
    
    if (reqitems.length>0) {
        try {
            const requuireProducts = await products.find({_id:{$in: reqitems}})
        res.json(requuireProducts)
        }
        catch (e) {console.log(e);}
        
        
    }
    
})

ordersRoute.post('/removefromorder',async (req,res) => {
    const uniqueid = req.body.itemid + req.body.user
        
        const requuireProducts = await orders.findOneAndRemove({uniqueid:uniqueid})
        res.json('done')
    
})

module.exports = ordersRoute