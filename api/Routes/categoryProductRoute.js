const express = require('express')
const categoryProductRoute = express.Router()
const mongoose = require('mongoose')

const Products = require('../mongoModels/products.js')

categoryProductRoute.post('/:id', async (req,res) => {
    const {id} = req.params
   
    const data = await Products.find({category:id})
    
    res.json(data)
})

module.exports = categoryProductRoute