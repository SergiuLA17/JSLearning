class Human {
    name: string;
    age: number;
    work: boolean;
    salary: number;
    children: Human[] = [];

    constructor(
        name: string,
        age: number,
        work: boolean,
        salary: number,
        children: Human[]
    ) {
        this.name = name;
        this.age = age;
        this.work = work;
        this.salary = salary;
        this.children = children;
    }

    setAge(age: number) {
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }

    toString(): void {
        console.log('My name is ' + this.name);
        console.log("I'm " + this.age);
        if(this.work){
            console.log("I'm working");
            console.log("My salary is " + this.salary + "per hour")
        }else{
            console.log("I'm not working");
        }
       
        if (this.children.length > 0) {
            console.log("My children:");
            this.children.forEach((child) => {
                console.log(child.name + " he is " + child.age + " years old");
            
            });
        }else{
            console.log("No children");
        }
}
}
let human = new Human("Vasya", 40, true, 100.9, [new Human("Petya", 10, false, 0, []), new Human("Kolya", 15, false, 0, [])]);
human.sayHello();

console.log(human);
console.log(human.name);

