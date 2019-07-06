export class Phone {
    model: string
    company: string
    price: number

    constructor(model: string, company: string, price: number) {
        this.model = model
        this.company = company
        this.price = price
    }

    printDetails() {
        console.log(`model: ${this.model}`)
        console.log(`company: ${this.company}`)
        console.log(`price: ${this.price}`) 
    }
}

export const pi = 3.14

export function add(p1: number, p2: number) {
    const result = p1 + p2
    console.log(`result: ${result}`)
}

