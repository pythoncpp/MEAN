const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
app.use(bodyParser.json())

function connectDB() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mean_db',
        port: 3306
    })
    connection.connect()
    return connection
}

app.get('/product', (request, response) => {
    const connection = connectDB()
    const statement = `select id, title, description, price from Product`
    connection.query(statement, (error, result) => {
        connection.end()

        if (error) {
            console.log(error)
            response.send('error')
        } else {
            response.send(result)
        }
    })
})

app.post('/product', (request, response) => {
    const {title, description, price} = request.body

    const connection = connectDB()
    const statement = `insert into Product (title, description, price) values ('${title}', '${description}', ${price})`
    connection.query(statement, (error, result) => {
        connection.end()

        if (error) {
            console.log(error)
            response.send('error')
        } else {
            response.send(result)
        }
    })
})

app.put('/product/:productId', (request, response) => {
    const id = request.params.productId
    const {title, description, price} = request.body
    
    const statement = `update Product set 
            title = '${title}', description = '${description}', price = ${price}
            where id = ${id}`
    const connection = connectDB()
    connection.query(statement, (error, result) => {
        if (error) {
            console.log(error)
            response.send('error')
        } else {
            response.send(result)
        }
    })
})

app.delete('/product/:id', (request, response) => {
    const id = request.params.id
    const statement = `delete from Product where id = ${id}`
    const connection = connectDB()
    connection.query(statement, (error, result) => {
        if (error) {
            console.log(error)
            response.send('error')
        } else {
            response.send(result)
        }
    })
})

app.listen(5000, '0.0.0.0', () => {
    console.log('server started on port 5000')
})