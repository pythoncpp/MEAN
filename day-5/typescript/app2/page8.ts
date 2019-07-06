// default access specifier = public

class Person {
    // properties
    private name: string
    private address: string
    private age: number

    // constructor
    constructor(name: string = '', address: string = '', age: number = 20) {
        this.name = name
        this.address = address
        this.age = age
    }

    // getters [inspectors]
    getName(): string { return this.name }
    getAddress(): string { return this.address }
    getAge(): number { return this.age }

    // setters [mutators]
    setName(name: string) { this.name = name }
    setAddress(address: string) { this.address = address }
    setAge(age: number) { 
        if ((age >= 20) && (age <= 60) ) {
            this.age = age 
        } else {
            console.log('invalid age')
        }
    }

    // facilators
    // printDetails() {
    //     console.log(`name: ${this.name}`)
    //     console.log(`address: ${this.address}`)
    //     console.log(`age: ${this.age}`)
    // }

    printDetails = () => {
        console.log(`name: ${this.name}`)
        console.log(`address: ${this.address}`)
        console.log(`age: ${this.age}`)
    }
}



const person1 = new Person('person1', 'pune', 30)
// person1.name = "test"
// console.log(person1)
// console.log(`name: ${person1.getName()}`)
// console.log(`address: ${person1.getAddress()}`)
// console.log(`age: ${person1.getAge()}`)
person1.printDetails()

const person2 = new Person()
person2.setName('person2')
person2.setAddress('pune')
person2.setAge(70)

person2.printDetails()

// console.log(`name: ${person2.getName()}`)
// console.log(`address: ${person2.getAddress()}`)
// console.log(`age: ${person2.getAge()}`)

// console.log(person2)
