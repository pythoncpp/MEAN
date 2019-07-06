var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// superclass
var Person = /** @class */ (function () {
    function Person(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    Person.prototype.printDetails = function () {
        console.log("name: " + this.name);
        console.log("address: " + this.address);
        console.log("age: " + this.age);
    };
    return Person;
}());
// subclass
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, address, age, team) {
        var _this = _super.call(this, name, address, age) || this;
        _this.team = team;
        return _this;
    }
    // overriding method
    Player.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("team: " + this.team);
    };
    return Player;
}(Person));
var person1 = new Person('person1', 'pune', 40);
// person1.name  = 'person1'
// person1.address = 'pune'
// person1.age = 40
// console.log(person1)
person1.printDetails();
var player1 = new Player('player1', 'mumbai', 35, 'india');
// player1.name = 'player1'
// player1.address = 'mumbai'
// player1.age = 35
// player1.team = 'india'
// console.log(player1)
player1.printDetails();
