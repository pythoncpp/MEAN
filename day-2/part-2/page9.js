const http = require('http');

const server = http.createServer((request, response) => {
    const parts = request.url.split('?');
    const queryString = parts[1];
    const pairs = queryString.split('&');

    const keyValuePairs = pairs.map(pair => {
        const keyValues = pair.split('=');
        return  {key: keyValues[0], value: keyValues[1]};
    });

    function parsePair(key) {
        const array = keyValuePairs.filter(pair => {
            return pair.key == key;
        })
        
        return array.length > 0 ? parseInt(array[0].value) : 0;     
    }

    let value1 = parsePair('value1'), value2 = parsePair('value2');
    const addition = value1 + value2;
    response.end('' + addition);
});

server.listen(4000, () => {
    console.log('server started on port 4000');
})