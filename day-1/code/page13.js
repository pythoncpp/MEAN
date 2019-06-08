function add(p1, p2) {
    console.log(`addition = ${p1 + p2}`);
}

function executor(p) {
    // p = function (p1, p2) {
    //   console.log(`sub = ${p1 - p2}`);
    // }
    console.log(`typeof p = ${typeof(p)}`);
    console.log(p);
    p(10, 20);
    p(20, 30);
    p(30, 40);
    p(40, 50);
}

// executor(10);
// executor('10');
// executor(true);
// executor({name: 'test'});
// executor();
executor(add);

function multiply(p1, p2) {
    console.log(`multiplication = ${p1 * p2}`);
}

const myMultiply = multiply;
executor(myMultiply);

// annonymous function / unnamed function
const myDivide = function (p1, p2) {
    console.log(`division = ${p1 / p2}`);
};
executor(myDivide);

executor(function (p1, p2) {
    console.log(`sub = ${p1 - p2}`);
});
