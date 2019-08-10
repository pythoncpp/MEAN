const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const utils = require('../utils')

router.get('/', (request, response) => {
    Product.find()
        .exec((error, products) => {
            response.send(utils.createResponse(error, products))
        })
})

router.delete('/:id', (request, response) => {
    const id = request.params.id

    Product.findOne({ _id: id })
        .exec((error, product) => {
            product.remove()
            response.send(utils.createResponse(error, product))
        })
});

router.post('/', (request, response) => {
    const { title, description, rating, price, cpu, ram, size, category } = request.body

    const product = new Product()
    product.title = title
    product.description = description
    product.price = price
    product.rating = rating

    if (category == 'mobile') {
        product.cpu = cpu
        product.ram = ram
    } else if (category == 'motor') {
        product.size = size
    }
    product.category = category

    product.save((error, result) => {
        response.send(utils.createResponse(error, result))
    })
})

module.exports = router