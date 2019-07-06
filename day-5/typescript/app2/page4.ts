
let result: number | string = 100
console.log(`result = ${result}, type = ${typeof(result)}`) // number

result = 'error'
console.log(`result = ${result}, type = ${typeof(result)}`) // string

// result = true

let result2: string|number|boolean

result2 = 100
console.log(`result2 = ${result2}, type = ${typeof(result2)}`) // number

result2 = 'test'
console.log(`result2 = ${result2}, type = ${typeof(result2)}`) // number

result2 = false
console.log(`result2 = ${result2}, type = ${typeof(result2)}`) // number


// let result3: string|number|boolean|object
let result3: any
// let result3 = undefined


result3 = 100
console.log(`result3 = ${result3}, type = ${typeof(result3)}`) // number

result3 = 'test'
console.log(`result3 = ${result3}, type = ${typeof(result3)}`) // string

result3 = false
console.log(`result3 = ${result3}, type = ${typeof(result3)}`) // boolean

result3 = { name: 'test' }
console.log(`result3 = ${result3}, type = ${typeof(result3)}`) // object
