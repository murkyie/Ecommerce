const categoryModel = require('../Models/categoryModel')



const getCategories = (request,response) =>{
    categoryModel.find().then((result)=>{
        return response.status(200).send(result)
    }).catch(err=> response.json({"ERR" : err}))
}

const getCategory = async (request,response) =>{
    await categoryModel.findById(request.params.id)
    .then((result)=>{
        return response.json({"category":result})
    }).catch((err)=>{
        return response.status(500).send(err)
    })
}

const createCategory = async(request,response) =>{
    await categoryModel.create(request.body)
    .then((result)=>{
        return response.status(201).json({"category" : result})
    })
    .catch((err)=>{
        return response.status(404).json({"ERR:" :err})
    })
}

const updateCategory = async (request,response) =>{
    await categoryModel.findByIdAndUpdate(request.params.id,request.body,{new:true})
    .then((result)=>{
        return response.status(200).json({"updatedCategory" : result})
    })
    .catch((err)=>{
        return response.status(500).json({"ERR:" : err})
    })
}

const deleteCategory = async (request,response) =>{
    await categoryModel.findByIdAndDelete(request.params.id)
    .then(()=>{
        return response.status(200).send("category deleted successfully")
    }).catch((err)=>{
        return response.status(500).json({"cannot delete category ERR:" : err})
    })
}


module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}