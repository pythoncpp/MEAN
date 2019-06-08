// arrow function
// - syntax  to create anonymous function

const multiy = (p1, p2) => {
    console.log(`${p1} * ${p2} = ${p1 * p2}`);
};

// function square(p1) {
//     return p1 * p1;
// }

// const square = function(p1) {
//     return p1 * p1;
// }

// const square = (p1) => {
//     return p1 * p1;
// }

// const square = p1 => {
//     return p1 * p1;
// }

const square = p1 => p1 * p1;
const value = square(10);
console.log(`value = ${value}`);