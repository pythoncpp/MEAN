var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.erase = function () {
        console.log('Circle is erased');
    };
    Circle.prototype.area = function () {
        console.log('area of Circle');
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.erase = function () {
        console.log('reactangle is erased');
    };
    Rectangle.prototype.area = function () {
        console.log('area of rectangle');
    };
    return Rectangle;
}());
var circle = new Circle();
circle.erase();
circle.area();
var rectangle = new Rectangle();
rectangle.erase();
rectangle.area();
