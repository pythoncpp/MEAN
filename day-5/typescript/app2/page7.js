var Person = /** @class */ (function () {
    // constructor
    function Person(name, address, age) {
        if (name === void 0) { name = ''; }
        if (address === void 0) { address = ''; }
        if (age === void 0) { age = 0; }
        console.log('inside constructor');
        this.name = name;
        this.address = address;
        this.age = age;
    }
    return Person;
}());
var person1 = new Person('person1', 'pune', 30);
console.log(person1);
var person2 = new Person();
console.log(person2);
