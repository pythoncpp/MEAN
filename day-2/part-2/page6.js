// step1: import the module
const http = require('http');

// step2: instatiate the web server
const server = http.createServer((request, response) => {
    console.log('request received');

    // server is  done with processing the request
    response.end();
});

// step3: make the server listen  on required port
server.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000');
});