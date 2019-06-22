const express = require('express');
const mysql = require('mysql');

const app = express()

app.get('/product', (request, response) => {

    // create connection with  mysql db
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mean_db',
        port: 3306
    })

    // connect to the mysql instance
    connection.connect()
    
    const statement = `select id, title, description, price from Product`
    connection.query(statement, (error, result) => {
        // clsoe the connection
        connection.end();
        console.log(error);
        
        console.log(result)
        response.send(result)
    })
})

app.listen(5000, '0.0.0.0', () => {
    console.log('server started  on port 5000')
})