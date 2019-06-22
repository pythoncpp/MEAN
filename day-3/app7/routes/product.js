const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select id, title, description, price from Product`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResponse(error, data))
    })
})

router.get('/:id', (request, response) => {
    const id = request.params.id
    const connection = db.connect()
    const statement = `select id, title, description, price from Product where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResponse(error, data))
    })
})

router.post('/', (request, response) => {
    const connection = db.connect()
    const {title, description, price} = request.body
    console.log(request.body)
    
    const statement = `insert into Product (title, description, price) values ('${title}', '${description}', ${price})`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResponse(error, data))
    })
})

router.put('/:id', (request, response) => {
    const id = request.params.id
    const connection = db.connect()
    const {title, description, price} = request.body

    const statement = `update Product set 
        title = '${title}', description = '${description}', price = ${price} 
        where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResponse(error, data))
    })
})

router.delete('/:id', (request, response) => {
    const id = request.params.id
    const connection = db.connect()
    const statement = `delete from Product where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResponse(error, data))
    })
})

module.exports = router