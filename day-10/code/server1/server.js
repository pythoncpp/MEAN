const express = require('express')
const productRouter = require('./routes/product')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/product', productRouter)

app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})