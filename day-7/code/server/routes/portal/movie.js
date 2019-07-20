const express = require('express')
const router = express.Router()
const db = require('../../db')
const utils = require('../../utils')

router.get('/genre-list', (request, response) => {
    const statement = `select * from genre`
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/genre/:id', (request, response) => {
    const genreId = request.params.id
    const statement = `select * from movie where genreId = ${genreId}`
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/', (request, response) => {
    const statement = `select * from movie`
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

module.exports = router