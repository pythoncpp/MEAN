// json
const person1 = { name: 'person1', address: 'Pune' }
console.log(person1)

// using Object
const person2 = new Object()
person2.name = 'person2'
person2.address = 'Mumbai'
console.log(person2)

// using constructor function
function Person(name, address) {
    this.name = name
    this.address = address
}

const person3 = new Person('person3', 'Satara')
console.log(person3)