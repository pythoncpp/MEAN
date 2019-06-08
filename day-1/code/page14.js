// const add = function (p1, p2) {
//     console.log(` ${p1} + ${p2} = ${p1 + p2}`);
// }

function add(p1, p2) {
    console.log(` ${p1} + ${p2} = ${p1 + p2}`);
}

function executor(func) {
    console.log(`func = ${func}`);
    func(10, 20);
}
// original function
executor(add);

function subtract(p1, p2) {
    console.log(` ${p1} - ${p2} = ${p1 - p2}`);
}

let operation = false;
const myFunc = operation ? add : subtract;

// function alias
executor(myFunc);

// anonymous function
// unnamed function
const multiy = function(p1, p2) {
    console.log(`${p1} * ${p2} = ${p1 * p2}`);
};

// anonymous function
executor(multiy);

multiy(10, 40);

// anonymous function
executor(function(p1, p2) {
    console.log(` ${p1} / ${p2} = ${p1 / p2}`);
});