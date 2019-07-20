const mysql = require('mysql')

function connect() {
    const connection = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'movie_shop',
        port: 3306
    })

    return connection
}

module.exports = {
    connect: connect
}