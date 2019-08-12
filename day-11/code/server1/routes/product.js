const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const Category = require('../models/Category')

// router.get('/', (request, response) => {
//     Product.find().exec((error, products) => {
//         if (error) {
//             console.log(error)
//         }
//         response.send(products)
//     })
// })

router.get('/', (request, response) => {
    // const categoryId = request.params.categoryId

    // // find the category
    // Category.findOne({ _id: categoryId })
    //         .populate('products.product')
    //         .exec((error, category) => {
    //             // return the products within this category
    //             response.send(category.products)
    //         })

    Category.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'products.product',
                foreignField: '_id',
                as: 'products'
            }
        }
    ]).exec((error, result) => {
        if (error) {
            console.log(error)
        }
        response.send(result)
    })
})

router.post('/:categoryId', (request, response) => {
    const categoryId = request.params.categoryId
    const { title, rating, price } = request.body

    const product = new Product()
    product.title = title
    product.rating = rating
    product.price = price

    // add the product
    product.save((error, product) => {
        if (error) {
            console.log(error)
        } else {

            // add the productId into the categories products
            Category.findOne({ _id: categoryId })
                .exec((error, category) => {

                    // add the product id to category products
                    category.products.push({
                        product: product._id
                    })
                    category.save((error, result) => {
                        if (error) {
                            console.log(error)
                        }
                        response.send(result)
                    })
                })
        }
    })
})

module.exports = router