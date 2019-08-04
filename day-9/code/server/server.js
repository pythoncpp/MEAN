const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const utils = require('./utils')
const jwt = require('jsonwebtoken')
const config = require('./config')

// get all the routers
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/category')
const itemRouter = require('./routes/item')
const cartRouter = require('./routes/cart')

const app = express()
// for cross origin ..
app.use(cors('*'))

// getting the json and form-data from client
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// logging
app.use(morgan('dev'))

// add the authorization
app.use((request, response, next) => {
    // check the open APIs
    if ((request.url == '/user/signup') || 
        (request.url == '/user/signin') ) {
        
        // no token is required for these apis
        next()
    } else {
        // protected apis
        const token = request.headers['x-auth-token']
        if (token) {
            try {
                // check if the token is valid
                const data = jwt.verify(token, config.secrete)
    
                // add the user id to the request
                request.userId = data.id
    
                // call the next (actual) api
                next()
            } catch(ex) {
                console.log(ex)
                response.send(utils.createResponse('invalid token'))
            }
        } else {
            // response.status = 401
            response.send(utils.createResponse('missing token'))
        }
    }
})

// add the routers
app.use('/user', userRouter)
app.use('/category', categoryRouter)
app.use('/item', itemRouter)
app.use('/cart', cartRouter)

app.listen(4000, () => {
    console.log(`Server started on 4000`);
});