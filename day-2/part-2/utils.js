const url = require('url');

function calculate(requestUrl) {
    const params = url.parse(requestUrl, true).query;
        
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

    return result;
}

module.exports = {
    calculate: calculate
}

