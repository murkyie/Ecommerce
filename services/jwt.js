const {sign, verify} = require('jsonwebtoken')

const createToken = (customer) =>{
    const accessToken = sign({
        id: customer._id
    },
    "anySecret&&**2Key",
    { expiresIn: 60 * 60 }
    )
    return accessToken
}


const verifyToken = (token) =>{
    return verify(token,"anySecret&&**2Key",(error,payload)=>{
        return {
            error,
            payload
        }
    })
    
}

module.exports = {createToken, verifyToken}