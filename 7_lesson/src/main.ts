import { Human } from "./Human";


let human = new Human('Vasya', 25, true, 100, [
    new Human('Petya', 5, false, 0, [])
    , 
    new Human('Kolya', 3, false, 0, [])
]);
human.speak();



