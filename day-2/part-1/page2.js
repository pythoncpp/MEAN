// json
const person = {

    // properties
    name: 'person1',
    address: 'Pune',
    age: 40,

    // methods
    canVote: function() {
        if (this.age >= 18) {
            console.log("yes.. ");
        } else {
            console.log("no.. ");
        }
    },

    printDetails: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`Age: ${this.age}`);
    }
}

console.log(`name: ${person.name}`);
person.canVote();
person.printDetails();
console.log(`type of name: ${typeof(person.name)}`);
console.log(`type of canVote: ${typeof(person.canVote)}`);

const person2 = {
    name: 'person2',
    address: 'Mumbai',
    age: 10,

    canVote: function() {
        if (this.age >= 18) {
            console.log('yes..');
        } else {
            console.log('no..');
        }
    },

    printDetails: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`Age: ${this.age}`);
    }
}

person2.canVote();
person2.printDetails();