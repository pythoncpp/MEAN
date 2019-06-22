const express = require('express')

const router = express.Router();

router.get("/user", (request, response) => {
    response.send('list of users')
})

module.exports = router