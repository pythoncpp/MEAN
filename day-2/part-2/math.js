// cyclic dependency
// const page3 = require('./page3');

const pi = 3.14;

function add(p1, p2) {
    console.log(`addition: ${p1 + p2}`);
}

function subtract(p1, p2) {
    console.log(`subtraction: ${p1 - p2}`);
}

function divide(p1, p2) {
    console.log(`division: ${p1 / p2}`);
}

function multiply(p1, p2) {
    console.log(`multiplication: ${p1 * p2}`);
}

// module.exports = add;
// module.exports = subtract;

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    pi: pi
};