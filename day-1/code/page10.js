// using constructor function
// - used to create/construct an object

function Person(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
}

const p1 = new Person('person1', 'Pune', 34);
console.log(`p1 = `, p1);

const p2 = new Person('person2', 'Mumai', 50);
console.log(p2);

p2['name'] = 'person5';
console.log(p2);