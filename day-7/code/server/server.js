const express = require('express')
const bodyParser = require('body-parser')

// admin routers
const movieRouterAdmin = require('./routes/admin/movie')
const userRouterAdmin = require('./routes/admin/user')

// portal routers
const userRouterPortal = require('./routes/portal/user')
const movieRouterPortal = require('./routes/portal/movie')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});
app.use(express.static('images'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// add admin routes
app.use('/admin/movie', movieRouterAdmin)
app.use('/admin/user', userRouterAdmin)

// add portal routes
app.use('/portal/user', userRouterPortal)
app.use('/portal/movie', movieRouterPortal)

app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})