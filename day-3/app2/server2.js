const express = require('express');
const querystring = require('querystring');

const app = express();

const products = [
    { id: 1, title: 'product 1', description: 'product 1', price: 100 },
    { id: 2, title: 'product 2', description: 'product 2', price: 200 },
    { id: 3, title: 'product 3', description: 'product 3', price: 300 },
    { id: 4, title: 'product 4', description: 'product 4', price: 400 }
]

app.get('/', (request, response) => {
    response.end('welcome to the application');
});

app.get('/product', (request, response) => {
    // convert the  array  object to json string
    // const strProducts = JSON.stringify(products);
    // response.writeHead(200, {'Content-Type': 'application/json'});
    // response.end(strProducts);

    // converts the array into json string
    // sets the content-type to appliction/json
    response.send(products);
});

app.post('/product', (request, response) => {
    // console.log(querystring.parse(request.url, true));

    console.log(request.query);
    /*
    const id = request.query.id;
    const title = request.query.title;
    const description = request.query.description;
    const price = request.query.price;
    */
    // object dereferencing
    const { title, id, description, price } = request.query;

    // appending to the products array
    products.push({
        id: id,
        title: title,
        description: description,
        price: price
    })
    response.send('created a new product');
});

app.put('/product', (request, response) => {
    const { id, title, description, price }  =  request.query;
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        if (product.id == id) {
            // found the product
            product.title = title;
            product.price = price;
            product.description = description;
            break;
        }
    }
    response.send('updated product');
});

app.delete('/product', (request, response) => {
    const {id} = request.query;
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        if (product.id == id) {
            // found the product
            products.splice(index, 1);
            break;
        }
    }

    response.send('deleted product');
});

app.listen(5000, '0.0.0.0', () => {
    console.log('server started on  port 50000');
});