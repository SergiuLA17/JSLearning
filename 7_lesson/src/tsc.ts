class Human{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

let human = new Human('John', 25);
human.sayHello();
console.log(human);