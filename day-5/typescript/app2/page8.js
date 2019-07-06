// default access specifier = public
var Person = /** @class */ (function () {
    // constructor
    function Person(name, address, age) {
        if (name === void 0) { name = ''; }
        if (address === void 0) { address = ''; }
        if (age === void 0) { age = 20; }
        var _this = this;
        // facilators
        // printDetails() {
        //     console.log(`name: ${this.name}`)
        //     console.log(`address: ${this.address}`)
        //     console.log(`age: ${this.age}`)
        // }
        this.printDetails = function () {
            console.log("name: " + _this.name);
            console.log("address: " + _this.address);
            console.log("age: " + _this.age);
        };
        this.name = name;
        this.address = address;
        this.age = age;
    }
    // getters [inspectors]
    Person.prototype.getName = function () { return this.name; };
    Person.prototype.getAddress = function () { return this.address; };
    Person.prototype.getAge = function () { return this.age; };
    // setters [mutators]
    Person.prototype.setName = function (name) { this.name = name; };
    Person.prototype.setAddress = function (address) { this.address = address; };
    Person.prototype.setAge = function (age) {
        if ((age >= 20) && (age <= 60)) {
            this.age = age;
        }
        else {
            console.log('invalid age');
        }
    };
    return Person;
}());
var person1 = new Person('person1', 'pune', 30);
// person1.name = "test"
// console.log(person1)
// console.log(`name: ${person1.getName()}`)
// console.log(`address: ${person1.getAddress()}`)
// console.log(`age: ${person1.getAge()}`)
person1.printDetails();
var person2 = new Person();
person2.setName('person2');
person2.setAddress('pune');
person2.setAge(70);
person2.printDetails();
// console.log(`name: ${person2.getName()}`)
// console.log(`address: ${person2.getAddress()}`)
// console.log(`age: ${person2.getAge()}`)
// console.log(person2)
