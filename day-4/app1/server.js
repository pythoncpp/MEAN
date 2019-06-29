const express = require('express')

// adding the routes
const routerUser = require('./routes/user')
const routerBlog = require('./routes/blog')

const app = express()

// adding the routes
app.use('/user', routerUser)
app.use('/blog', routerBlog)

app.get('/', (request, response) => {
    response.send('welcome')
})

app.listen(7000, '0.0.0.0', () => {
    console.log(`Server started on 7000`);
});