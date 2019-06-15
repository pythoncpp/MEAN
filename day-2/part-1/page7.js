// callback function
function add(p1, p2) {
    console.log(`addition: ${p1 + p2}`);
}

function executor(func) {
    console.log(func);
    console.log(typeof(func));

    func(10, 20);
}

// executor(10);   
// executor(add);

function function1() {
    const addition = 10 + 20;
    if (addition == 20) {
        console.log('yes');
        return true;
    } else {
        console.log('no');
        return false;
    }
}

// if (function1() == true) {
//     console.log('next part of yes');
// } else {
//     console.log('next part of no')
// }

// resolve: success
// reject: error
// const promise1 = new Promise((resolve, reject) => {
//     const addition = 10 + 20;
//     if (addition == 20) {
//         console.log('yes');
//         resolve('yes');
//     } else {
//         console.log('no');
//         reject('no');
//     }
// });

// promise1
//     .then(message => {
//         console.log('then is working: ' + message);
//     })
//     .catch(error => {
//         console.log('catch is working: ' + error);
//     });


const promise2 = new Promise((resolve, reject) => {
    // code 
    const answer = 2 + 3;
    if (answer == 5) {
        resolve('true');
    } else {
        reject('false');
    }
});

promise2
    .then(message => {
        console.log('then... ' + message); 
    })
    .catch(error => {
        console.log('catch.. ' + error);
    })

