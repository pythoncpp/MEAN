function function1() {
    const person = { name: 'person1', address: 'Pune', age: 40 };
    return person;
}


const num = 100;
console.log(num);

// dereferencing the object
const { name, address, age } = function1();
console.log(`name: ${name}`);
console.log(`address: ${address}`);
console.log(`age: ${age}`);

const result = function1();
console.log(`name: ${result.name}`);
console.log(`address: ${result.address}`);
console.log(`age: ${result.age}`);


function function2() {
    return {model: 'iPhone XS Max', company: 'Apple'};
}

// object
const mobile = function2();
console.log(`model: ${mobile.model}`);
console.log(`company: ${mobile.company}`);

// variables
const {model, company, price} = function2();
console.log(`model: ${model}`);
console.log(`company: ${company}`);
console.log(`price: ${price}`);