const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('welcome')
})

app.listen(7000, '0.0.0.0', () => {
    console.log(`Server started on 7000`);
});