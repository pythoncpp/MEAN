const express = require('express');

// responsible for parsing the body
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json())

app.get('/product', (request, response) => {
    const statement = `select  * from product`;
    console.log(statement)
    response.send('list of products')
})

app.post('/product', (request, response) => {
    // console.log(request.body);
    const {id, title, description, price} = request.body;
    console.log(`id: ${id}`)
    console.log(`title: ${title}`)
    console.log(`description: ${description}`)
    console.log(`price: ${price}`)

    const statement = `insert  into product (id, title, description, price) values (${id}, '${title}', '${description}', ${price})`;
    console.log(statement)

    response.send('inserted a product')
})

app.put('/product/:id', (request, response) => {
    const id = request.params.id;
    console.log(`id: ${id}`)

    const {title, description, price} = request.body

    const statement = `update product set title = '${title}', description = '${description}', price = ${price} where id = ${id}`;
    console.log(statement)

    response.send('updated record')
})

app.delete('/product/:id', (request, response) => {
    const id = request.params.id;
    const statement = `delete from product where id = ${id}`;
    console.log(statement)
    response.send('deleted record')
})

app.listen(5000, '0.0.0.0', () => {
    console.log(`Server started on 5000`);
});