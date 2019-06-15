// using Object [root function]
// inside object, using 'this' is mandatory

/*
function canVote() {
    console.log(this.age);
    if (this.age >= 18) {
        console.log('yes..');
    } else {
        console.log('no..');
    }
}

canVote();
*/


const person1 = new Object();
person1.name = 'person1';
person1.address = 'Pune';
person1.age = 40;

// add a method
person1.canVote = function () {
    if (this.age >= 18) {
        console.log('yes..');
    } else {
        console.log('no..');
    }
};

// add a method
person1.printDetails = function() {
    console.log(`name: ${this.name}`);
    console.log(`address: ${this.address}`);
    console.log(`age: ${this.age}`);
};

person1.canVote();
// person1.printDetails();


const person2 = new Object();
person2.name = 'person2';
person2.address = 'Satara';
person2.age = 10;

// add a method
person2.canVote = function () {
    if (this.age >= 18) {
        console.log('yes..');
    } else {
        console.log('no..');
    }
};

// add a method
person2.printDetails = function() {
    console.log(`name: ${this.name}`);
    console.log(`address: ${this.address}`);
    console.log(`age: ${this.age}`);
};

person2.canVote();