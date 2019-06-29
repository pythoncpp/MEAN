const express = require('express')
const bodyParser = require('body-parser')

// get all the routes
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

const app = express()

// for json
app.use(bodyParser.json())

// for urlencoded
app.use(bodyParser.urlencoded());

// all the files in the  public folder will not require any 
// specific route -> use /<file name> on browser
app.use(express.static(__dirname + '/public'))

// add all the routes
app.use('/product', productRouter)
app.use(userRouter)

app.listen(5000, '0.0.0.0', () => {
    console.log('server started on port 5000')
})