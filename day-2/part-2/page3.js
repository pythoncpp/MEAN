const math = require('./math');
const page1 = require('./page1');

console.log(module);

console.log(math);
math.add(10, 20);
math.subtract(30, 20);
math.multiply(10, 30);
math.divide(10, 2);
console.log(`pi: ${math.pi}`);

module.exports = {
    add: math.add
}