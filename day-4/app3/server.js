const express = require('express')
const db = require('./db')
const utils = require('./utils')
const cryptoJs = require('crypto-js')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const secret = '1231342423432434435xkfjdfg'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/login', (request, response) => {
    const { email, password } = request.body

    // encrypt password
    const encrypted = '' + cryptoJs.SHA1(password)

    const statement = `select id, firstname, lastname, email, deleted from user where email = '${email}' and password = '${encrypted}'`
    const connection = db.connect()
    connection.query(statement, (error, users) => {
        connection.end()

        // check if user can login
        if (users.length == 0) {
            // user does not exist
            response.status(401)
            response.send(utils.createResponse('user does not exist'))
        } else {
            // user exists
            const user = users[0]
            if (user.deleted == 1) {
                // user has closed the account
                response.send(utils.createResponse('you have closed your account :('))
            } else {
                const token = jwt.sign({ id: user.id }, secret)
                // response.header({'x-auth-token': token})
                // response.writeHead(200, {'x-auth-token': token})
                response.send(utils.createResponse(error, {
                    token: token,
                    name: user.firstname + ' ' + user.lastname
                }))
            }
        }
    })
})

app.get('/profile/', (request, response) => {

    try {
        const token = request.headers['x-auth-token']
        console.log('token: ' + token)
    
        const data = jwt.verify(token, secret)
        console.log(data)
    
        const id = data.id
    
        const statement = `select id, firstname, lastname, email, phone, address, deleted, profileImage from user where id = ${id}`
        const connection = db.connect()
        connection.query(statement, (error, result) => {
            connection.end()
            if (result.length == 0) {
                // user does not exist
                response.send(utils.createResponse('user does not exist'))
            } else {
                // user exists
                const user = result[0]
                
                if (user.deleted == 1) {
                    // user has closed the account
                    response.send(utils.createResponse('you have closed your account :('))
                } else {
                    response.send(utils.createResponse(error, user))
                }
            }
        })
    } catch(ex) {
        response.status(401)
        response.send(utils.createResponse('invalid token'))
    }
   
})

app.get('/blog', (request, response) =>  {
    const token = request.headers['x-auth-token']
    if (token == undefined || token == null) {
        response.status(401)
        response.send(utils.createResponse('missing token'))
    } else {
        try {
            const data = jwt.verify(token, secret)
            const id = data.id
            /*
            const iat = data.iat
            const date = new Date(iat)
            console.log(date)
            */
        
            const statement = `select *  from blog where userId = ${id}`
            const connection = db.connect()
            connection.query(statement, (error, result) => {
                connection.end()
                response.send(utils.createResponse(error, result))
            })
        } catch(ex) {
            response.status(401)
            response.send(utils.createResponse('missing token'))
        }
    }
})


app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})