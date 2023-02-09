"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
class Human {
    constructor(name, age, work, salary, children) {
        this.children = [];
        this.name = name;
        this.age = age;
        this.work = work;
        this.salary = salary;
        this.children = children;
    }
    setAge(age) {
        this.age = age;
    }
    speak() {
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
            this.children.forEach((child) => {
                console.log(child.name + " he is " + child.age + " years old");
            });
        }
        else {
            console.log("No children");
        }
    }
}
exports.Human = Human;
