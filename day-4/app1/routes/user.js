const express = require('express')
const db = require('../db')
const utils = require('../utils')
const cryptoJs = require('crypto-js')

const router = express.Router()

router.get('/', (request, response) => {
    response.send('GET users')
})

// signup 
router.post('/signup', (request, response) => {
    const { firstname, lastname, email, address, phone, password } = request.body

    // ecrypt the password
    const encrypted = '' + cryptoJs.SHA1(password)

    const statement = `insert into user 
        (firstname, lastname, email, phone, password, address, profileImage ) values
        ('${firstname}', '${lastname}', '${email}', '${phone}', '${encrypted}', '${address}', 'default_profile.png')
    `
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})

// signin
router.post('/signin', (request, response) => {
    const { email, password } = request.body

    // encrypt password
    const encrypted = '' + cryptoJs.SHA1(password)

    const statement = `select id, firstname, lastname, email from user where email = '${email}' and password = '${encrypted}'`
    const connection = db.connect()
    connection.query(statement, (error, users) => {
        connection.end()

        // check if user can login
        if (users.length == 0) {
            // user does not exist
            response.status(401)
            response.send(utils.createResponse('user does not exist'))
        } else {
            // user exists
            response.send(utils.createResponse(null, users[0]))
        }
    })
})

// profile
router.get('/profile/:id', (request, response) => {
    const id = request.params.id

    const statement = `select id, firstname, lastname, email, phone, address, profileImage from user where id = ${id}`
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})


module.exports = router