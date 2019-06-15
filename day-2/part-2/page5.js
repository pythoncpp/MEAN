const fs = require('fs');


// synchronously
// sequentially 
// blocking function/API
function function1() {
    try {
        console.log('reading file started');
        const data = fs.readFileSync('./file2.txt');

        const answer = 1232421343 * 12312312222432434;
        console.log(`answer: ${answer}`);

        console.log('reading file finished');
        console.log(`contents are avaiable`);
    } catch(ex) {
        console.log(`exception: ${ex}`);
    }
}

// function1();


// asynchronously
// non-blocking function/api
function function2() {
    console.log('reading file started');

    // asynchronous
    // callback function
    // - a function written by developer and gets called by someone else
    fs.readFile('./file.txt', (error, data) => {
        console.log('reading file finished');
        if (error) {
            console.log(error);
        } else {
            console.log('contents are available');
            // const strData = '' + data;
            console.log(`data: ${data}`);
        }
    })

    // parallely
    const answer = 1232421343 * 12312312222432434;
    console.log(`answer: ${answer}`);
}

function2();