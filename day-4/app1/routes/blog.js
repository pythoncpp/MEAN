const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    response.send('GET blogs')
})

module.exports = router