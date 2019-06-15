const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(`request received for url: ${request.url}`);

    let fileName = '', statusCode = 200;
    if ((request.url == '/home') || (request.url == '/')) {
        fileName = './pages/home.html';
    } else if (request.url == '/about') {
        fileName = './pages/about-us.html';
    } else if (request.url == '/contact') {
        fileName = './pages/contact-us.html';
    } else {
        fileName = './pages/404.html';
        statusCode = 404;
    }

    const homeContents = '' + fs.readFileSync(fileName);
    response.writeHead(statusCode, {'Content-type': 'text/html'});
    response.end(homeContents);
});

server.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000');
});