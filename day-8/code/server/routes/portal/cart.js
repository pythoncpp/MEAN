const express = require('express')
const router = express.Router()
const db = require('../../db')
const utils = require('../../utils')
const crypto = require('crypto')

router.post('/hash', (request, response) => {
    const key = 'DKPGuyIj'
    const salt = 'JPQFYYYd7K'
    const {txnid, amount, pinfo, fname, email, udf5} = request.body

    const cryp = crypto.createHash('sha512');
    const text = key+'|'+txnid+'|'+amount+'|'+pinfo+'|'+fname+'|'+email+'|||||'+udf5+'||||||'+salt;
	cryp.update(text);
    const hash = '' + cryp.digest('hex');
    console.log(hash)
    response.end('' + hash)
})

router.post('/', (request, response) => {
    const {userId, movieId, price, total, quantity} = request.body

    const statement = `insert into cart
        (userId, movieId, price, total, quantity)  values
        (?,  ?,  ?, ? , ?)`
    const connection = db.connect()
    connection.query(statement,
        [userId, movieId, price, total, quantity],
        (error, result) => {

            connection.query(`select count(*) as count from cart where userId = ?`, 
                [userId],
                (error, result) => {
                    response.send(utils.createResult(error, result[0]))
                }
            )
        }
    )
})

router.get('/:userId', (request, response) => {
    const userId = request.params.userId

    const statement = `select cart.*, movie.title from cart, movie where (movie.id = cart.movieId) and (userId = ?)`
    const connection = db.connect()
    connection.query(statement, [userId], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.delete('/:id', (request, response) => {
    const id = request.params.id
    const statement = `delete from cart where id = ?`
    const connection = db.connect()
    connection.query(statement,
        [id],
        (error, result) => {
            response.send(utils.createResult(error, result))
        }
    )
})

router.put('/:id', (request, response) => {
    const id = request.params.id
    const {price, quantity, total} = request.body

    const statement = `update cart set
        price = ?, quantiy = ?, total = ?
        where id = ?`
    const connection = db.connect()
    connection.query(statement,
        [price, quantity, total, id],
        (error, result) => {
            response.send(utils.createResult(error, result))
        }
    )
})

module.exports = router
