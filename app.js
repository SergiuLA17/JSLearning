var Human = (function () {
    function Human(name, age, work, salary, children) {
        this.children = [];
        this.name = name;
        this.age = age;
        this.work = work;
        this.salary = salary;
        this.children = children;
    }
    Human.prototype.setAge = function (age) {
        this.age = age;
    };
    Human.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    Human.prototype.toString = function () {
        console.log('My name is ' + this.name);
        console.log("I'm " + this.age);
        if (this.work) {
            console.log("I'm working");
            console.log("My salary is " + this.salary + "per hour");
        }
        else {
            console.log("I'm not working");
        }
        if (this.children.length > 0) {
            console.log("My children:");
            this.children.forEach(function (child) {
                console.log(child.name + " he is " + child.age + " years old");
            });
        }
        else {
            console.log("No children");
        }
    };
    return Human;
}());
var human = new Human("Vasya", 40, true, 100.9, [new Human("Petya", 10, false, 0, []), new Human("Kolya", 15, false, 0, [])]);
human.sayHello();
console.log(human.toString());
