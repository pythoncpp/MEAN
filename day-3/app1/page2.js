// step 1
const http = require('http');

// step 2
const server = http.createServer((request, response) => {
    // process the request

    console.log('request received');

    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    // response.end('<h1>hello client</h1>');

    if (request.url == '/user') {
        if (request.method == 'GET') {
            console.log('geting all the users');
        } else if (request.method == 'POST') {
            console.log('creating a new user record');
        } else if (request.method == 'PUT') {
            console.log('updating user');
        } else if (request.method == 'DELETE') {
            console.log('deleting the user record');
        }
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(`[{ "name": "person1", "age": 40 }, { "name": "person2", "age": 20 }]`);
});

// step 3
server.listen(5000, '0.0.0.0', () => {
    console.log('server started on port 5000');
});
