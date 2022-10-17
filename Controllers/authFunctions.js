const {validationResult} = require('express-validator')
const customerModel = require('../Models/CustomerModel')
const bcrypt = require('bcrypt')
const jwt = require("../services/jwt")

const postRegisterFunction = (request,response) =>{
    const errors = validationResult(request)
    if(!errors.isEmpty()) {
        return response.status(400).json({err:errors.array()})
    }
    bcrypt.hash(request.body.password, 5).then((hash)=>{
        request.body.password = hash
        customerModel.create(request.body)
        .then((result)=>{
            return response.status(201).send(result)
        })
        .catch((err)=>{
            return response.status(400).send(err)
        })
    })  
}

const postLoginFunction = async (request,response) =>{
    const {email, password} = request.body
    const customer = await customerModel.findOne({email : email})
    if (!customer) return response.status(404).json({error:"Invalid UserEmail"})

    const dbpassword = customer.password 
    await bcrypt.compare(password,dbpassword)
    .then((match)=>{
        if (!match) return response.send("Password and email don't match")
        else {
            const accessToken = jwt.createToken(customer)
            return response.send({
                user : customer,
                token : accessToken
            })
        }
    })

}
const ApiMe = (request,response)=>{
    var token = request.headers.authorization
    var {payload,error} = jwt.verifyToken(token)
    if(error) return response.status(403).json(error)
    return response.status(200).json(payload)  
}


module.exports = {
    postRegisterFunction,
    postLoginFunction,
    ApiMe
}