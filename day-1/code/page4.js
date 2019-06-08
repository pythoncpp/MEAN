// string interpolation

const num1 = 10;
const num2 = 20;
const num3 = 30;

// console.log('num1 = ' + num1 + ', num2  = ' + num2 + ', num3 = ' + num3);
console.log(`num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);

const name = 'person1';
const address = 'pune';
const phone = '+9134343434';

// const query = 'insert into Person (name, address, phone) values (\'' + name + '\', \'' +  address + '\', \'' + phone + '\')';
const query = `insert into Person  (name, address, phone) values ('${name}', '${address}', '${phone}')`;
console.log(query);

