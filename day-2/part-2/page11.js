// step1: import the module
const http = require('http');
const url = require('url');

// step2: instatiate the web server
const server = http.createServer((request, response) => {
    console.log('request received');
    const params = url.parse(request.url, true).query;
    console.log(params);

    const operation = params['operation'];
    const value1 = parseInt(params['value1']), value2 = parseInt(params['value2']);
    let result = 0;
    if (operation == 'a') {
        result = value1 + value2;
    } else if (operation == 's') {
        result = value1 - value2;
    } else if (operation == 'd') {
        result = value1 / value2;
    } else if (operation == 'm') {
        result = value1 * value2;
    }

    // server is  done with processing the request
    response.end('' + result);
});

// step3: make the server listen  on required port
server.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000');
});