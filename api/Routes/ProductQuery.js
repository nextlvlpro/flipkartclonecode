const express = require('express')
const productQueryRoute = express.Router()
const mongoose = require('mongoose')

const Products = require('../mongoModels/products.js')



productQueryRoute.post('/',(req,res) => {
    Products.find().then(data => res.json(data))
})

productQueryRoute.post('/search',async (req,res) => {
   
    const searchValue = req.body.searchvalue
    if(searchValue) {
        const searchResult = await Products.find({itemname:{$regex:searchValue, $options:'i'}})
        res.json(searchResult)
    } else {
        res.json(null)
    }
    
})



module.exports = productQueryRoute
