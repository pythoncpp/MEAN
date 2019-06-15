function function1() {
    console.log('inside function1');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resolving promise for function1');
            resolve('function1');
        }, 2000);
    });
}

function function2() {
    console.log('inside function2');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resolving promise for function2');
            resolve('function2');
        }, 2000);
    });
}

function function3() {
    console.log('inside function3');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resolving promise for function3');
            resolve('function3');
        }, 2000);
    });
}

async function doWork() {
    await function1();
    await function2();
    await function3();
}

async function test1() {
    await doWork();
}

test1();

// Promise.all([
//     function1(),
//     function2(),
//     function3()
// ]).then(messages => {
//     console.log(messages);
// })

/*
function1()
    .then(message => {
        console.log(message)

        // function2
        function2()
            .then(message => {
                console.log(message)

                // function3
                function3()
                    .then(message => {
                        console.log(message)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    })
    .catch(error => {
        console.log(error);
    })
*/

/*
function1()
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.log(error);
    })

function2()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    })

function3()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    })
*/