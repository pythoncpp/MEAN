const express = require('express')
const bodyParser = require('body-parser')

// adding the routes
const routerUser = require('./routes/user')
const routerBlog = require('./routes/blog')

const app = express()

// for getting input from the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// static routes
app.use(express.static('public'))
app.use(express.static('images'))

// adding the routes
app.use('/user', routerUser)
app.use('/blog', routerBlog)

app.get('/', (request, response) => {
    response.send('welcome')
})

app.listen(7000, '0.0.0.0', () => {
    console.log(`Server started on 7000`);
});