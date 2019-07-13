const express = require('express');
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select id, title, description, price from Product`
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResult(error, result))
    })
})

router.post('/', (request, response) => {
    const {title, description, price} = request.body

    const connection = db.connect()
    const statement = `insert into Product (title, description, price) values (?, ?, ?)`
    connection.query(statement, [title, description, price], (error, result) => {
        connection.end()
        response.send(utils.createResult(error, result))
    })
})

router.put('/:id', (request, response) => {
    const id = request.params.id
    const {title, description, price} = request.body

    const connection = db.connect()
    const statement = `update Product  set  title = ?, description = ?, price = ? where id = ?`
    connection.query(statement, [title, description, price, id], (error, result) => {
        connection.end()
        response.send(utils.createResult(error, result))
    })
})

router.delete('/:id', (request, response) => {
    const id = request.params.id

    const connection = db.connect()
    const statement = `delete from Product where id = ?`
    connection.query(statement, [id], (error, result) => {
        connection.end()
        response.send(utils.createResult(error, result))
    })
})

module.exports = router