const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
    const statement = `select blog.id as blogId, user.id as userId, title, contents, firstname, lastname, email from blog, user where blog.userId = user.id and blog.deleted = 0`

    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})

router.post('/:userId', (request, response) => {
    const userId = request.params.userId
    const { title, contents } = request.body

    const statement = `insert into blog 
        (title, contents, userId) values 
        ('${title}', '${contents}', '${userId}')`

    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})

router.delete('/comment/:commentId', (request, response) => {
    const commentId = request.params.commentId
    const statement = `delete from comment where id = ${commentId}`

    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})

router.delete('/:userId/:blogId', (request, response) => {
    const userId = request.params.userId
    const blogId = request.params.blogId

    // check whethser owner has requested to close/delete the blog
    const statement = `select id, title from blog where userId = ${userId} and id = ${blogId}`
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        if (result.length == 0) {
            // the blog is not created by the user
            response.status(401)
            response.send(utils.createResponse('you are not allowed to delete this blog'))
        } else {
            // validated owner
            const statement2 = `update blog set deleted = 1 where id = ${blogId}`
            connection.query(statement2, (error, result) => {
                connection.end()
                response.send(utils.createResponse(error, result))
            })
        }
    })
})


router.post('/comment/:userId/:blogId', (request, response) => {
    const userId = request.params.userId
    const blogId = request.params.blogId
    const {comment} = request.body

    const statement = `insert into comment
        (userId, blogId, comment) values 
        ('${userId}', '${blogId}', '${comment}')`

    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})

router.get('/comment/:blogId', (request, response) => {
    const blogId = request.params.blogId
    const statement = `select id, comment from comment where blogId = ${blogId}`

    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})


module.exports = router