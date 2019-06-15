// step1: import the module
const http = require('http');
const utils = require('./utils');
const fs = require('fs');

// step2: instatiate the web server
const server = http.createServer((request, response) => {
    console.log('request received');
    if (request.url == '/') {
        const pageContents =  fs.readFileSync('./pages/calculator.html');
        response.end('' + pageContents);
    } else if (request.url.startsWith('/operation')) {
        const result = utils.calculate(request.url);
        // server is  done with processing the request
        response.end('' + result);
    }
});

// step3: make the server listen  on required port
server.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000');
});