// step1: import the module
const http = require('http');

// step2: instatiate the web server
const server = http.createServer((request, response) => {
    console.log('request received');
    console.log(`url: ${request.url}, method: ${request.method}`);

    if (request.url == '/product') {
        if (request.method == 'GET') {
            console.log('select * from product');
        } else if (request.method == 'POST') {
            console.log('insert into product');
        } else if (request.method == 'PUT') {
            console.log('update product');
        } else if (request.method == 'DELETE') {
            console.log('delete from product');
        }
    } else if (request.url == '/user') {
        if (request.method == 'GET') {
            console.log('select * from user');
        } else if (request.method == 'POST') {
            console.log('insert into user');
        } else if (request.method == 'PUT') {
            console.log('update user');
        } else if (request.method == 'DELETE') {
            console.log('delete from user');
        }
    } else if (request.url == '/category') {
        if (request.method == 'GET') {
            console.log('select * from category');
        } else if (request.method == 'POST') {
            console.log('insert into category');
        } else if (request.method == 'PUT') {
            console.log('update category');
        } else if (request.method == 'DELETE') {
            console.log('delete from category');
        }
    }

    // server is  done with processing the request
    response.end();
});

// step3: make the server listen  on required port
server.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000');
});


// console.log(http.METHODS);
// console.log(http.STATUS_CODES);