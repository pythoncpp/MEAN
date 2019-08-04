const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.get('/', (request, response) => {
    const statement = `select cart.*, item.title as title, item.description as description from cart, item where (cart.itemId = item.id) and  (userId = ?)`
    db.connection.query(statement, [request.userId], (error, categories) => {
        response.send(utils.createResponse(error, categories))
    })
})

router.delete('/:cartItemId', (request, response) => {
    const id = request.params.cartItemId
    const statement = `delete from cart where id = ?`
    db.connection.query(statement, [id], (error, categories) => {
        response.send(utils.createResponse(error, categories))
    })
})

router.post('/', (request, response) => {
    const {itemId, price, quantity} = request.body
    const statement = `insert into cart (userId, itemId, price, quantity) values (?, ?, ?, ?)`
    db.connection.query(statement, [request.userId, itemId, price, quantity], (error, categories) => {
        response.send(utils.createResponse(error, categories))
    })
})


module.exports = router
