// NUMBERS: 
// (1) integers & float
n = 3**2; // 3*3
z = 3**4; // 3*3*3*3
console.log(n); // 9
// -------------------------------
// (2) infinity
a = 1/0;
console.log(a); // Infinity

// alert(Infinity); // Infinity
// alert(-Infinity); // -Infinity
// -------------------------------
// (3) NaN
b = "NaN" / 2;
console.log(b); // NaN

c = "NaN" + 99;
console.log(c); // NaN99

d = "NaN" * 3;
console.log(d); // NaN

// (4) BigInt (highest existing number, largest value that is allowed in JS)
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n