const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

router.get('/', (request, response) => {
    Category.find().exec((error, products) => {
        if (error) {
            console.log(error)
        }
        response.send(products)
    })
})


router.post('/', (request, response) => {
    const { title } = request.body

    const category = new Category()
    category.title = title

    category.save((error, product) => {
        if (error) {
            console.log(error)
        }
        response.send(product)
    })
})

module.exports = router