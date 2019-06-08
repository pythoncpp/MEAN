// Object oriented JS

// Object
// - collection of properties (data members/fields)
// - and methods

// to create an object (instance)
// - JSON
// - using Object
// - using constructor function
// - using class [use TypeScript]


// JSON
// JS Object Notation
// - syntax to  create an object
// - in JSON the keys (properties) are always string

// object
const person = { name: "person1", address: "Pune", phone: '+91234243' };
console.log(`typeof person = ${typeof(person)}, person = ${person}`);
console.log(person);

// array
const persons = [
    { name: "person1", address: "Pune", phone: '+91234243' },
    { name: "person2", address: "Satara", phone: '+91234244' },
    { name: "person3", address: "Nashik", phone: '+91234245' },
    { name: "person4", address: "Mumbai", phone: '+91234246' },
];
console.log(`type of person = ${typeof(persons)}`);
console.log(persons);

for (let index = 0; index < persons.length; index++) {
    const person = persons[index];
    console.log(`name: ${person.name}, address: ${person.address}, phone: ${person.phone}`);
}

const mobile = {
    model: 'iPhone XS Max 512 GB',
    company: 'Apple',
    price: 144000
};

console.log(mobile);

// add a function