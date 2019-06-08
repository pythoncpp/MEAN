let num = 10;

// variable assignment
let num2 = num;
console.log(`num = ${num}, num2 = ${num2}`);

num = 100;
num2 = 300;
console.log(`num = ${num}, num2 = ${num2}`);

let p1 = {name: 'person1', address: 'Pune'};

// reference assignment
let p2 = p1;

console.log(p1, p2);
p1.name = 'person3';
p2.address = 'Mumbai';
console.log(p1, p2);


function myFunction() {
    console.log('inside myFunction');
}

myFunction();

// function alias (similar  to function pointer in c/c++)
// another name given to existing function
const myFunction2 = myFunction;
myFunction2();

console.log(`type of myFuction = ${typeof(myFunction)}, type of myFuction2 = ${typeof(myFunction2)}`);