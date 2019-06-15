// constructor function

function Person(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
}

Person.prototype.canVote = function () {
    if (this.age >= 18) {
        console.log('yes..');
    } else {
        console.log('no..');
    }
};

const p1 = new Person('person1', 'Pune', 40);
console.log(p1);
p1.canVote();

const p2 = new Person('person2', 'Mumbai', 10);
console.log(p2);
p2.canVote();

// alert('hello');

// console.log(this);