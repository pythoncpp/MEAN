// JSON
const person = { name: "person", address: "Pune", age: 45 };
const mobile = { model: "iPhone Xs Max", company: "apple" };

// Object [root function]
const person1 = new Object();
person1.name = "person1";
person1.address = "Mumbai";
person1.age = 10;

const mobile1 = new Object();
mobile1.model = "One Plus 7";
mobile1.company = "One Plus";

// using constructor function
function Person(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
}

const person2 = new Person("Person2", "Satara", 30);

function Mobile(model, company) {
    this.model = model;
    this.company = company;
}

const mobile2 = new Mobile("Galxy S3", "Samsung");
