const express = require('express')
const cors = require('cors')
const productRouter = require('./routes/product')

const monogoose = require('mongoose')
monogoose.connect('mongodb://localhost:27017/mydb')


const app = express()
app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/product', productRouter)

app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})