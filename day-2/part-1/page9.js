function function1() {
    console.log('inside function1');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('function 1 is resolved');
            resolve('fucntion 1');
        }, 2000);
    })
}

function function2() {
    console.log('inside function2');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('function 2 is rejected');
            reject('fucntion 2');
        }, 2000);
    })
}

async function doWork() {
    try {
        await function2();
        await function1();
    } catch(ex) {
        console.log(`exception: ${ex}`);
    }
}

doWork();

/*
Promise.all([
    function1(),
    function2()
]).then(messages => {
    console.log(`success: ${messages}`);
}).catch(errors => {
    console.log(`error: ${errors}`);
})
*/

/*
function1()
    .then(message => {
        console.log(`success: ${message}`);
    })
    .catch(error => {
        console.log(`error: ${error}`);
    })


function2()
    .then(message => {
        console.log(`success: ${message}`);
    })
    .catch(error => {
        console.log(`error: ${error}`);
    })
*/

