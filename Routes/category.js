const express = require("express")

const router = express.Router()

const controllers = require("./../Controllers/categoryFunctions")

router.get('/getcategories',controllers.getCategories)
router.get('/getcategory/:id',controllers.getCategory)
router.post('/createcategory',controllers.createCategory)
router.put('/updatecategory/:id',controllers.updateCategory)
router.delete('/deletecategory/:id',controllers.deleteCategory)

module.exports = router 