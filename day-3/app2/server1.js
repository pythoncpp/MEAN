// step 1: import express
const express = require('express');

// step 2: create a server
const app = express();

// step 3: add routes
// route: combination of http method and the reqeust url
app.get('/', (request, response) => {
    console.log('GET request received for /');
    response.end('client response');
});

app.post('/', (request, response) => {
    console.log('POST request received for /');
    response.end('creating a record');
})

app.get('/product', (request, response) => {
    console.log('GET request for /product');
    response.end('list of products');
});

app.post('/product', (request, response) => {
    console.log('POST request received for /product');
    response.end('creating a product');
})

app.get('/user', (request, response) => {
    console.log('GET  request for  /user');
    response.end('list  of  users');
})

app.post('/user', (request, response) => {
    console.log('POST request received for /user');
    response.end('registering a new user');
})

// step 4: start the server on a port
app.listen(5000, '0.0.0.0', () => {
    console.log('server started on port 5000')
})