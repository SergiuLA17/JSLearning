var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Human;
}());
var human = new Human('John', 25);
human.sayHello();
console.log(human);
console.log(human.name);
