// let: keyword to create  mutable variable
// const: keyword to create immutable variable


// variable name:  num
// variable value: 10
// variable data type: number

// number
let num = 10;
// console.log(num);
console.log('num = ' + num);

num = 100;
console.log('num = ' + num);
console.log('typeof num = ' + typeof(num));

// number
let salary = 4.5;
console.log('salary = ' + salary);
console.log('data type of salary = ' + typeof(salary));

// string
let firstName = 'steve';
let lastName = "Jobs";
let address = `USA`;

console.log('type of firstName = ' + typeof(firstName));
console.log('type of lastName = ' + typeof(lastName));
console.log('type of address = ' + typeof(address));

// boolean 
// - true/false
let canVote = true;
console.log('tyepe of canVote = ' + typeof(canVote));

// object
let person = { "name": "steve jobs", "company": "Apple" };
console.log('type of person = ' + typeof(person));

// undefined
let myVar;
console.log('myVar = ' + myVar);
console.log('type of myVar = ' + typeof(myVar));


const pi = 3.14;

//  not possible to change the value of a constant
// pi = 3.15;