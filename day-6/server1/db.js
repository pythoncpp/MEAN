const mysql = require('mysql')

function connect() {
    const connection  = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'mean_db'
    })

    connection.connect()

    return connection
}

module.exports = {
    connect: connect
}