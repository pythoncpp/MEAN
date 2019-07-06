"use strict";
exports.__esModule = true;
var Phone = /** @class */ (function() {
    function Phone(model, company, price) {
        this.model = model;
        this.company = company;
        this.price = price;
    }
    Phone.prototype.printDetails = function() {
        console.log("model: " + this.model);
        console.log("company: " + this.company);
        console.log("price: " + this.price);
    };
    return Phone;
}());
exports.Phone = Phone;
exports.pi = 3.14;

function add(p1, p2) {
    var result = p1 + p2;
    console.log("result: " + result);
}
exports.add = add;

/*

module.exports = {
    Phone: Phone,
    pi: pi,
    add: add
}

*/