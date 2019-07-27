const nodemailer = require('nodemailer') 
const fs = require('fs')

function sendEmail(email, body, subject, callback) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'meansunbeam@gmail.com',
               pass: 'Google#123'
           }
    })

    const mailOptions = {
        from: 'meansunbeam@gmail.com', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        html: body // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else  {
            console.log(info)
        }

        callback(error, info)
    })
}

module.exports = {
    send: sendEmail
}