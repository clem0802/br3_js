// JavaScript_1 - Brainnest Assignment (2)(3)

// (2a) Find the diagonal of a square
// Pythagorean theorem
let diagonal = Math.sqrt(9**2 + 9**2);
console.log(diagonal); // 12.727922061357855

// (2b) Find the area of a triangle
let perimeter = 5 + 6 + 7;
let x = perimeter / 2;
let area_1 = Math.sqrt(x*(x-5)*(x-6)*(x-7));
console.log(area_1); // 14.696938456699069

// (2c) Find the circumference of a circle whose radius is 4 
// 2πr
const PI = 3.14
let circumference = 2 * PI * 4;
console.log(circumference); // 25.12

// (2c) Find the surface area of a circle 
// πr²
let area_2 = PI * 4 **2;
console.log(area_2); // 50.24

//---------------------------------
// (3a) Program accepting two integers and displaying the larger one
let integer_1 = parseInt(prompt("Please type a number:"));
let integer_2 = parseInt(prompt("Please type another number:"));
let larger;
if (integer_1 > integer_2) {
    larger = integer_1;
    console.log(`The larger number is integer_1: ${larger}`);
} else if (integer_2 > integer_1) {
    larger = integer_2;
    console.log(`The larger number is integer_2: ${larger}`);
} else {
    console.log(`The two numbers are equal, yet one must be bigger than the other. Try again.`);
}

// (3b) Program checking whether an integer is an even or an odd number
let number = parseInt(prompt("Please enter a number:"));
if (number % 2 == 0) {
    console.log("The number entered is an even one.");
} else {
    console.log("The number entered is an odd one.");
}