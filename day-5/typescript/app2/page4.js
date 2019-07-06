var result = 100;
console.log("result = " + result + ", type = " + typeof (result)); // number
result = 'error';
console.log("result = " + result + ", type = " + typeof (result)); // string
// result = true
var result2;
result2 = 100;
console.log("result2 = " + result2 + ", type = " + typeof (result2)); // number
result2 = 'test';
console.log("result2 = " + result2 + ", type = " + typeof (result2)); // number
result2 = false;
console.log("result2 = " + result2 + ", type = " + typeof (result2)); // number
var result3;
result3 = 100;
console.log("result2 = " + result3 + ", type = " + typeof (result3)); // number
result3 = 'test';
console.log("result2 = " + result3 + ", type = " + typeof (result3)); // string
result3 = false;
console.log("result2 = " + result3 + ", type = " + typeof (result3)); // boolean
result3 = { name: 'test' };
console.log("result2 = " + result3 + ", type = " + typeof (result3)); // object
