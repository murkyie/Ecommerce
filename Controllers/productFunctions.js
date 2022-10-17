const productModel = require('../Models/productModel')
const categoryModel = require('./../Models/categoryModel')


const getProducts = (request,response) =>{
    productModel.find().then((result)=>{
        return response.status(200).send(result)
    }).catch(err=> response.json({"ERR" : err}))
}

const getProduct = async (request,response) =>{
    await productModel.findById(request.params.id)
    .then((result)=>{
        return response.json({"product":result})
    }).catch((err)=>{
        return response.status(500).send(err)
    })
}

const createProduct  = async (request,response) =>{
    const categoryCheck = await categoryModel.findById(request.body.productCategory)
    if(!categoryCheck) return response.status(400).send("Invalid category")
    await productModel.create(request.body)
    .then((result)=>{
        return response.status(201).json({"product" : result})
    })
    .catch((err)=>{
        return response.status(404).json({"ERR:" :err})
    })
}

const updateProduct  = async (request,response) =>{
    await productModel.findByIdAndUpdate(request.params.id,request.body,{new:true})
    .then((result)=>{
        return response.status(200).json({"updatedProduct" : result})
    })
    .catch((err)=>{
        return response.status(500).json({"ERR:" : err})
    })
}

const deleteProduct  = async (request,response) =>{
    await productModel.findByIdAndDelete(request.params.id)
    .then(()=>{
        return response.status(200).send("product deleted successfully")
    }).catch((err)=>{
        return response.status(500).json({"cannot delete product ERR:" : err})
    })
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}