const express = require("express")
const methods = require('../Controllers/authFunctions') 
const router = express.Router()
const midd = require('./../Middlewares/customerMiddleware')

router.post('/register', midd, methods.postRegisterFunction)
router.post('/login', methods.postLoginFunction)
router.get('/me',methods.ApiMe)

module.exports = router
