const {body} = require('express-validator')

module.exports=[
    body("firstName").notEmpty().withMessage(" First name required").isString(),
    body("lastName").notEmpty().withMessage(" Last name required").isString(),
    body("phoneNumber").notEmpty().withMessage(" Phone Number is required").isInt(),
    body("address").notEmpty().isString().withMessage("Address name required"),
    body("email").isEmail().withMessage("Respect email format : exemple@gmail.com"),
    body("confirmPassword").custom((value, { req }) => {
        console.log(req.body.password)
        if (value != req.body.password) {
          throw new Error('Password confirmation does not match password')
        }else return true
        }),
    body("password").notEmpty().isLength({min:5,max:14}).withMessage("Password not valid min:5 max:14")
    
]