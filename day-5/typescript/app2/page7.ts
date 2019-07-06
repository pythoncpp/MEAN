class Person {
    // properties
    name: string
    address: string
    age: number

    // constructor
    constructor(name: string = '', address: string = '', age: number = 0) {
        console.log('inside constructor')
        this.name = name
        this.address = address
        this.age = age
    }
}

const person1 = new Person('person1', 'pune', 30)
console.log(person1)

const person2 = new Person()
console.log(person2)