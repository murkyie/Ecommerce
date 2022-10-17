const mongoose = require('mongoose')
var customerModel = mongoose.Schema(
    {
        firstName:{type:String, required:true},
        lastName:{type:String, required:true},
        phoneNumber:{type:String, required:true},
        address:{type:String, required:true},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        validEmail:{type:Boolean, default:false}
    },
    {timestamps:true}
)
module.exports = mongoose.model("customers",customerModel)