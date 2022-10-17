const mongoose = require("mongoose")

const productModel = mongoose.Schema({
    productName:{type:String,required:true},
    description:{type:String,required:true},
    productImage:{type:String,required:true},
    price:{type:String,required:true},
    brand:{type:String,required:true},
    productCategory:{type:String,required:true,unique:false},
    countInStock:{type:String,required:true},
},
{timestamps:true}
)

module.exports = mongoose.model("products",productModel)

// {
//     "productName":"tie",
//     "description":"a red tie",
//     "productImage":"someUrl",
//     "price":"2$",
//     "brand":"zara",
//     "productCategory":"634c2323a44e70174e05fed5",
//     "countInStock":"20"
// }