// Ternary operator
// condition ? exprIfTrue : exprIfFalse

// function names, also camelCase
function add() {
    return hours + 3;
}

// -------------------------- function with a name
let hours = 8;
function myFunction(number = 4) {
    return hours + number + number;
}
myFunction();
myFunction(12)
console.log(myFunction()); // 16

// -------------------------- anonymous function 
// let heures = 8;
// let z = function () {
//     return 
// }


// --------------------------
// -------------------------- arrow function 
// let double = (n) => n * 2;
// console.log(double(4)); // 8

// // the same as:
// function double(n) {
//     return n * 2 
// }


// -------------------------- Nested Functions
// function foo() {
//     function bar() {
//         return 1;
//     }
//     return bar();
// }

// -------------------------- Call a Function
function maFonction(a, b) {
    return a * b;
}
console.log(maFonction(10, 2)); // 20