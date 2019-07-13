const express = require('express');
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select id, firstName, lastName, email, phone, address from User`
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResult(error, result))
    })
})

module.exports = router