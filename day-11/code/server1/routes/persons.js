const express = require('express')
const router = express.Router()
const Person = require('../models/Person')

router.get('/', (request, response) => {
    Person.aggregate([
        { $group: { _id: '$location.state', total: { $sum: 1 } } },
        { $sort: { total: -1 } },
        { $limit: 10 }
    ]).exec((error, result) => {
        if (error) {
            console.log(error)
        }
        response.send(result)
    })
})

module.exports = router