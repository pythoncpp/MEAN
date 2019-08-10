const express = require('express')
const router = express.Router()
const utils = require('../utils')
const mongojs = require('mongojs')

const db = mongojs('mydb', ['Product'])

router.get("/", (request, response) => {
    db.Product.find((error, products) => {
        response.send(utils.createResponse(error, products))
    })
});

router.post("/", (request, response) => {
    const { title, price, description, rating } = request.body

    const product = {
        title: title,
        price: price,
        description: description, 
        rating: rating
    }

    db.Product.insert(product, (error, result) => {
        response.send(utils.createResponse(error, result))
    })
});

router.put("/:id", (request, response) => {
    const id = request.params.id
    const { title, price, description, rating } = request.body

    db.Product.findAndModify({
        query: { _id: mongojs.ObjectId(id) },
        update: {
            $set: {
                title: title,
                price: price,
                description: description, 
                rating: rating
            }
        },
        new: true
    }, (error, result) => {
        response.send(utils.createResponse(error, result))
    })
});

router.delete("/:id", (request, response) => {
    const id = request.params.id

    db.Product.remove({ _id: mongojs.ObjectId(id)}, (error, result) => {
        response.send(utils.createResponse(error, result))
    })
});

module.exports = router