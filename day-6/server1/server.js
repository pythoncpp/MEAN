const express = require('express')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')
const productRouter = require('./routes/product')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(8000, '0.0.0.0', () => {
    console.log('server started on port 8000')
})