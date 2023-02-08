let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
console.log(matrix[1][0]);
