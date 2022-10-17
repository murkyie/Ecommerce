const express = require("express")

const router = express.Router()

const controllers = require("./../Controllers/productFunctions")

router.get('/getproducts',controllers.getProducts)
router.get('/getproduct/:id',controllers.getProduct)
router.post('/createproduct',controllers.createProduct)
router.put('/updateproduct/:id',controllers.updateProduct)
router.delete('/deleteproduct/:id',controllers.deleteProduct)

module.exports = router 