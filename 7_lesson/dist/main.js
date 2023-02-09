"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = require("./Human");
let human = new Human_1.Human('Vasya', 25, true, 100, [
    new Human_1.Human('Petya', 5, false, 0, []),
    new Human_1.Human('Kolya', 3, false, 0, [])
]);
human.speak();
