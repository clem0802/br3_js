// JavaScript_1 - Brainnest Assignment

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
console.log(larger);

// (3b) Program checking whether an integer is an even or an odd number
let number = parseInt(prompt("Please enter a number:"));
if (number % 2 == 0) {
    console.log("The number entered is an even one.");
} else {
    console.log("The number entered is an odd one.");
}
console.log(number);


// ---------------------------------
// (4b) begin with a function called computerPlay
let computerChoice = ['rock', 'paper', 'scissors'];
function computerPlay(){
    let select = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    // console.log(select); // (4b)
    return select;
}


// (4c) (as shown on the pic from the assignment)
// let playerSelection = "rock";
// let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// ---------------------------------
function playerPlay(){
    let validInput = false;
    do {
        let select = prompt("Please type 'rock', 'paper', or 'scissors'.");
        if(select == null){
            console.log(`Please play the game properly.\nEnter 'rock', 'paper', or 'scissors' to play.`)
        } else {
            let selectLowerCase = select.toLowerCase(); 
            // https://www.programiz.com/javascript/library/array/includes
            // "includes" checks whether computerChoice contains what is of selectLowerCase
            if(computerChoice.includes(selectLowerCase)){
                validInput = true;
                return selectLowerCase;
            }
        }
    } while(validInput == false)
}


// ---------------------------------
// (4c)-(4d) function taking two parameters: playerSelection, computerSelection
function playRound(playerSelection, computerSelection){
    let output = findWinner(playerSelection, computerSelection);
    if(output == "tie"){
        return "it's a tie";
    } else if(output == "player"){
        return `player won: ${playerSelection} beats ${computerSelection}`;
    } else{
        return `computer won: ${computerSelection} beats ${playerSelection}`;
    }
}

// ---------------------------------
// (4e) findWinner
function findWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "tie"
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    } else{
        return "computer";
    }
}

// ---------------------------------
// (4e) game() function + for LOOP 
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        // let playerSelection = "rock";
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        // call PlayRound function
        console.log(playRound(playerSelection, computerSelection)); 
        if(findWinner(playerSelection, computerSelection) == "player"){
            playerScore++;
        } else if(findWinner(playerSelection, computerSelection) == "computer"){
            computerScore++;
        }
    }
    console.log("Game Over.");

    if(playerScore > computerScore){
        console.log("Result: player won.");
    } else if(playerScore < computerScore){
        console.log("Result: computer won.");
    } else{
        console.log("Result: both tied.");
    }
}

game();