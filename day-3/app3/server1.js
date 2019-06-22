const express = require('express')

const app = express()

// middleware function
function log1(request, response, next) {
    console.log('inside log1')
    console.log('incoming request: ' + request.url)
    console.log('method: ' + request.method)

    // call the next "logical" callback function
    next()
}

// middleware function
function log2(request, response, next) {
    console.log('inside log2')
    // response.send('unauthorised')

    // call the next "logical" callback function
    next()
}

function log3(request, response, next) {
    console.log('inside log3')

    // call the next "logical" callback function
    next()
}


function log4() {
    console.log('inside log4')
    return (request, response, next) => {
        console.log('inside log4 anonymous function')
        next()
    }
}

app.use(log2)
app.use(log1)
app.use(log3)
app.use(function(request, response, next) {
    console.log('inside anonymous function 1')
    next()
})
app.use((request, response, next) => {
    console.log('inside anonymous function 2')
    next()
})
app.use(log4());

/// -------

app.get('/product', (request, response) => {
    console.log('inside /product')
    response.send('list of products')
})

app.get('/user', (request, response) => {
    console.log('inside /user')
    response.send('list of users')
})

app.get('/category', (request, response) => {
    console.log('inside /category')
    response.send('list of categories')
})

app.get('/cart', (request, response) => {
    console.log('inside /cart')
    response.send('list of cart items')
})

app.listen(5000, '0.0.0.0', () => {
    console.log('server started  on port 5000')
})