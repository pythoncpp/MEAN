const express = require('express')
const router = express.Router()
const db = require('../../db')
const utils = require('../../utils')
const multer = require('multer')
const upload = multer({ dest: 'images'})

router.get('/genre', (request, response) => {
    const statement = `select * from genre`
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

router.post('/', upload.single('thumbnail'), (request, response) => {
    console.log('inserting a new movie')
    const {title, description, country, genreId, year, cast, producer, duration, videoUrl, rating} = request.body
    const thumbnail = request.file.filename

    const statement = `insert into movie
        (title, description, country, genreId, year, cast, producer, duration, videoUrl, thumbnail, rating) values
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    const connection = db.connect()
    connection
        .query(statement,
            [title, description, country, genreId, year, cast, producer, duration, videoUrl, thumbnail, rating],
            (error, result) => {

            if (error) {
                console.log(error)
            }
            response.send(utils.createResult(error, result))
        })
})

router.put('/:id', upload.single('file'), (request, response) => {
    const id = request.params.id
    const {title, description, country, genreId, year, cast, producer, duration, videoUrl, rating} = request.body
    const statement = `
        update movie set
            title = ?,
            description = ?,
            country = ?,
            genreId = ?,
            year = ?,
            cast = ?,
            producer = ?,
            duration = ?,
            videoUrl = ?,
            rating =  ?
        where id = ?`

    const connection = db.connect()
    connection
        .query(statement,
            [title, description, country, genreId, year, cast, producer, duration, videoUrl, rating, id],
            (error, result) => {
            response.send(utils.createResult(error, result))
        })
})

router.delete('/:id', (request, response) => {
    const id = request.params.id

    const statement = `delete from movie where id = ?`
    const connection = db.connect()
    connection.query(statement, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

module.exports = router