const mongoose = require("mongoose")

const categoryModel = mongoose.Schema({
    categoryName:{type:String,unique:true,required:true},
    categoryImage:{type:String,required:true}
},
{timestamps:true}
)

module.exports = mongoose.model("categories",categoryModel)