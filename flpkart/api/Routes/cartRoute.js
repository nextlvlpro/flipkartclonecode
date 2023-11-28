const express = require('express')
const cartRoute = express.Router()
const mongoose = require('mongoose')
const cart = require('../mongoModels/cart')
const products = require('../mongoModels/products')


cartRoute.post('/savetocart', async (req, res) => {
    const uniqueid = req.body.itemid + req.body.userid

    const alreadyItem = await cart.findOne({uniqueid:uniqueid})

    if(alreadyItem) {
        const updateitem = await cart.findOneAndUpdate({uniqueid:uniqueid},{itemquantity: req.body.itemquantity})
        res.json('updated')
    }

    if(!alreadyItem) {
        const saveitem = await cart.create({
        itemid: req.body.itemid,
        userid: req.body.userid,
        itemquantity: req.body.itemquantity,
        uniqueid:uniqueid,
    })
    res.json('done')
    }
    
})

cartRoute.post('/allcart', async (req,res) => {
    

    const allcart = await cart.find({userid:req.body.userid})

    res.json(allcart)

})

cartRoute.post('/productsbyid',async (req,res) => {
    const reqitems = req.body
    
    if (reqitems.length>0) {
        try {
            const requuireProducts = await products.find({_id:{$in: reqitems}})
        res.json(requuireProducts)
        }
        catch (e) {console.log(e);}
        
        
    }
    
})

cartRoute.post('/removefromcart',async (req,res) => {
    const uniqueid = req.body.itemid + req.body.user
        
        const requuireProducts = await cart.findOneAndRemove({uniqueid:uniqueid})
        res.json('done')
    
})


cartRoute.post('/perticuleritem', async (req,res) => {
    const uniqueid = req.body.id + req.body.user

    const IfinCart = await cart.findOne({uniqueid:uniqueid})

    res.json(IfinCart)

})

cartRoute.post('/cartcount', async (req,res) => {
   
    const cartcount = await cart.find(req.body)

    res.json(cartcount)

})

module.exports = cartRoute