const express = require('express')
const router = express.Router()
const db = require('../../db')
const utils = require('../../utils')
const uuid = require('uuid/v1')
const mailer = require('../../mailer')
const fs = require('fs')


router.post('/activate/:token', (request, response) => {
    const token = request.params.token
    const statement = `update user set active = 1 where token = ?`
    const connection = db.connect()
    connection.query(statement, [token], (error, result) => {
        response.send(utils.createResult(error, result))
    })
});

router.post('/signin', (request, response) => {
    const {email, password} = request.body

    const statement = `select id, name, active from user where email = ? and password = ?`
    const connection = db.connect()
    connection.query(statement, [email, password], (error, result) => {
        if (result.length == 0) {
            response.send(utils.createResult('user does not exist'))
        } else {
            const user = result[0]
            if (user.active == 0) {
                response.send(utils.createResult('your account is not verified...'))
            } else {
                response.send(utils.createResult(error, result))
            }
        }
    })
})

router.post('/signup', (request, response) => {
    const {name, email, password, phone, address} = request.body

    const token = uuid()
    const statement = `insert into user
        (name, email, password, phone, address, token)  values
        (?, ?, ?, ?, ?, ?)`
    const connection = db.connect()
    connection.query(
        statement,
        [name, email, password, phone, address, token],
        (error, result) => {
            if (error)  {
                console.log(error)
            }
            console.log('sending email')

            // read the file contents
            let body = '' + fs.readFileSync('./templates/activation.html')

            // replace the name
            body = body.replace('[name]', name)
            body = body.replace('[token]', token)

            // replace the token

            // send email and wait for the email to get sent 
            mailer.send(email, body, 'Please activate your account', (error, info) => {

                // the email is sent, now send the response to the client
                response.send(utils.createResult(error, result))            
            })            
        })
})

module.exports = router