const express = require('express')
const customerRoutes = require('./Routes/customer')
const categoryRoutes = require('./Routes/category')
const productRoutes = require('./Routes/product')
const authRoutes = require('./Routes/auth')

require("./config/dbconnection")

const app = express()
app.use(express.json())

app.use('/auth',authRoutes)
app.use('/Ecommerce/customers',customerRoutes) 
app.use('/Ecommerce/categories',categoryRoutes)
app.use('/Ecommerce/products',productRoutes)
const port = 5000

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})