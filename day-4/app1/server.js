const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

// swagger
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

// import the morgan for logging
const morgan = require('morgan')

// adding the routes
const routerUser = require('./routes/user')
const routerBlog = require('./routes/blog')

const app = express()

// create the log stream
const logStream = fs.createWriteStream('mylogs.log')

// the logs will be shown on console
// app.use(morgan('tiny')) 
// app.use(morgan(':method :url :status', {
//     skip: function (req, res) { return res.statusCode < 400 } // 4xx and 5xx
// }))

// enable the logging into the file
app.use(morgan('combined', { stream: logStream }))

// for getting input from the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// swagger configuration
const options = {
    swaggerDefinition: {
      info: {
        title: 'MyBlogs APIs',
        version: '1.0.0',
      },
    },
    apis: ['./routes/*'],
};

// api specification for our application
const swaggerSpec = swaggerJSDoc(options);

// adding the route for generating the UI for API spec
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


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