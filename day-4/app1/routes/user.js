const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    response.send('GET users')
})

module.exports = router