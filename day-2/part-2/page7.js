const http = require('http');

const server = http.createServer((request, response) => {
    console.log('request received');
    // process the request
    // response.end('hello from server');

    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.end(`<h1>hello from server</h1>`);

    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.end(`<h1>hello from server</h1>`);

    const product = {id: 1, title: 'product 1', description: 'test description'};

    // convert object to string
    // const strProduct = JSON.stringify(product);
    // response.writeHead(200, {'Content-Type': 'application/json'});
    // response.end(strProduct);

    const products = [
        {id: 1, title: 'product 1', description: 'test description'},
        {id: 2, title: 'product 2', description: 'test description'},
        {id: 3, title: 'product 3', description: 'test description'},
        {id: 4, title: 'product 4', description: 'test description'},
    ];

    const strProducts = JSON.stringify(products);
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(strProducts);
});

server.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000');
});