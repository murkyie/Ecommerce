var smtpTransport = require('nodemailer-smtp-transport');
let mailTransporter = nodemailer.createTransport(
    smtpTransport({
        service: 'gmail',
        auth: {
            user: 'tt1931650@gmail.com', // my mail
            pass: 'fbqggwuqwsahzise'
        }
    })
)

let details = {
    from: "tt1931650@gmail.com",
    to: "bahloulyossra@gmail.com",
    subject: "test nodemailer",
    text: "test the first mail"
}

mailTransporter.sendMail(details, (err) => {
    if (err) {
        console.log("Error", err)
    } else {
        console.log("Email has been sent!")
    }
})
const nodemailer = require('nodemailer')