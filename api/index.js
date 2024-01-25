

// imports
const express = require('express')

const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

//mongo model import
const Products = require('./mongoModels/products.js')

//express router import
const productQueryRoute = require('./Routes/ProductQuery.js')
const categoryProductRoute= require('./Routes/categoryProductRoute.js')
const singleProductRoute = require('./Routes/singleProductRoute.js')
const resgisterRoute = require('./Routes/resgister.js')
const loginRoute = require('./Routes/login.js')
const cartRoute = require('./Routes/cartRoute.js')
const ordersRoute = require('./Routes/ordersRoute.js')


// envdata
const PORT = process.env.PORT
const MONGOURL = process.env.MONGOCONNECTUR

//jwt Key
const jwtKey = 'adjfvaiywvfadvclisgwef3563ewtw4yterwyheshuejh'

//midleware
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:['http://localhost:5173','http://192.168.143.135:5173']
}))


//mongo connection
    mongoose.connect(MONGOURL).then((res) => {
        console.log('Mongo connected');
    }).catch(err => console.log(err))


app.get('/test', (req,res) => {
    res.json('test sucseeful')
})


//Products
app.use('/allproducts',productQueryRoute)


//category products
app.use('/products', categoryProductRoute)


//singleproduct
app.use('/singleprodcuts', singleProductRoute)

//Register
app.use('/newuser',resgisterRoute)

//Login
app.use('/user',loginRoute)

//cuurentUserDetails jwt veryfiy
app.get('/currentuser', (req,res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, jwtKey,{}, (err, loggedInUser) => {
            if (err) throw err;
            
            res.json({email:loggedInUser.email, name:loggedInUser.name})

        })
    } else {
        res.json(null)
    }
})


//cart
app.use('/cart', cartRoute )

//order
app.use('/order', ordersRoute)



app.listen(PORT, () => console.log('server is listing at port ' + PORT))