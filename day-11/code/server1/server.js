const express = require('express')
const mongoose = require('mongoose')

const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')

// const personRouter = require('./routes/persons')

mongoose.connect('mongodb://localhost:27017/mydb')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/product', productRouter)
app.use('/category', categoryRouter)
// app.use('/person', personRouter)

app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})