const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
    response.send('GET users')
})

// signup 
router.post('/signup', (request, response) => {
    const { firstname, lastname, email, address, phone, password } = request.body

    const statement = `insert into user 
        (firstname, lastname, email, phone, password, address ) values
        ('${firstname}', '${lastname}', '${email}', '${phone}', '${password}', '${address}')
    `
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})

module.exports = router