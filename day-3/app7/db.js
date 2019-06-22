const mysql = require('mysql')
const config = require('./config')

function connect() {
    const {host, user, password, database, port} =  config.db
    const connection = mysql.createConnection({
        host: host,
        database: database,
        user: user,
        password: password,
        port: port
    })

    connection.connect()
    return connection
}

module.exports = {
    connect: connect
}