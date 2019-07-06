// superclass
class Person {
    protected name: string
    protected address: string
    protected age: number

    constructor(name: string, address: string, age: number) {
        this.name = name
        this.address = address
        this.age = age
    }

    printDetails() {
        console.log(`name: ${this.name}`)
        console.log(`address: ${this.address}`)
        console.log(`age: ${this.age}`)
    }
}

// subclass
class Player extends Person {
    private team: string

    constructor(name: string, address: string, age: number, team: string) {
        // call the super class constructor
        console.log('inside player constructor')
        super(name, address, age)
        this.team = team
    }

    // overriding method
    printDetails() {
        // call the super class method
        super.printDetails()
        console.log(`address: ${this.address}`)
        console.log(`team: ${this.team}`)
    }
}

const person1 = new Person('person1', 'pune', 40)
// person1.name  = 'person1'
// person1.address = 'pune'
// person1.age = 40
// console.log(person1)
person1.printDetails()

const player1 = new Player('player1', 'mumbai', 35, 'india')
// player1.name = 'player1'
// player1.address = 'mumbai'
// player1.age = 35
// player1.team = 'india'
// console.log(player1)
player1.printDetails()