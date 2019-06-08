// using Object (root function)

const person = new Object();

// adding properties
person.name = 'person1';
person.address = 'Pune';
person.age = 40;
// console.log(person);
console.log(`name: ${person['name']}`);
console.log(`address: ${person['address']}`);
console.log(`age: ${person['age']}`);



const mobile = new Object();

// adding properties
mobile['model'] = 'iPhone Max 7';
mobile['company'] = 'Apple';
mobile['price'] = '95000';
// console.log(mobile);
console.log(`model = ${mobile.model}`);
console.log(`company = ${mobile.company}`);
console.log(`price = ${mobile.price}`);