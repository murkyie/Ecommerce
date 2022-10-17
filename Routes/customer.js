const express = require("express")
const methods = require('../Controllers/customerFunctions') 
const router = express.Router()
const midd = require('./../Middlewares/customerMiddleware')

router.get('/getcustomers', midd, methods.getCustomers)
router.get('/getcustomer/:id', midd, methods.getCustomer)
router.put('/updatecustomer/:id',methods.updateCustomer)
router.delete('/deletecustomer/:id', methods.deleteCustomer)

module.exports = router
