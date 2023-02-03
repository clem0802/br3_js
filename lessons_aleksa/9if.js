// let a = "Z" > "A"; // true
// let b = "Glow" > "Glee"; // true
// let c = "Bee" > "Be"; // true

// alert('' == false); // true
// alert('' === false); // false

// alert(0 == false); // true
// alert(0 === false); // false (because the types are different: number and boolean)

// alert(null == undefined); // true
// alert(null === undefined); // false

// alert(null > 0); // false
// alert(null == 0); // false
// alert(null >= 0); // true

// SYNTAX:  if () {}
let hours = 4; // 0 - 24
if (hours < 13) { // 0-12
    console.log("Good morning"); 
} else { // 13-24
    console.log("Good afternoon");
}

let heures = 20; // 0 - 24
if (heures < 13) { // 0 - 12
    console.log("Good morning")
} else if (heures < 19) { // 13 - 18
    console.log("Good afternoon")
} else { // 19 - 24
    console.log("Good evening")
}

