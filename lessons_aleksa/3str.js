// STRINGS:

// doule-quotes: "n"
// simple-quotes: 'n'
// backticks: `n`


// (output) I went to JP 3 times in my life
let times = 3;
console.log(`I went to Japan ${times} times in my life.`);
console.log("I went to Japan" + " " + times + " times in my life.");

let test = `Hello ${times}`;
console.log(test); // Hello 3

// backslash \
let phrase = 'I\'m a girl.';
console.log(phrase); // I'm a girl.


// ----------------------------------------------- // .substr() 
// start from the end
const chaîne = 'Twas the night before Christmas';
let start = -9;
let length = 9;
chaîne.substr(start, length); // 'Christmas'
'Christmas'.length; // 9


// ----------------------------------------------- // .substring()
const str = 'Twas the night before Christmas';
let indexStart = 0;
let indexEnd = 4;
console.log(str.substring(indexStart, indexEnd)) // 'Twas'
console.log(str.substring(5, 14)) // 'the night'
console.log(str.substring(5)) // 'the night before Christmas' 
// If not specify indexEnd, the substring() function returns the rest of the string starting at indexStart.


// ----------------------------------------------- // .slice() 
const wordStr = 'Twas the night before Christmas'; 
console.log(wordStr.slice(0, 4)); // Twas
console.log(wordStr.slice(5, 14)); // the night
console.log(wordStr.slice(-16, -10)); // before
console.log(wordStr.slice(-9)); // Christmas
