const express = require('express')
const singleProductRoute = express.Router()
const mongoose = require('mongoose')

const Products = require('../mongoModels/products.js')

singleProductRoute.get('/:id', async (req,res) => {
    const {id} = req.params
    const productData = await Products.findById(id)
    res.json(productData)
})


module.exports = singleProductRoute