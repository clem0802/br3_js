// JavaScript_1 - Brainnest Assignment (4)

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
            continue;
        } else {
            let selectLowerCase = select.toLowerCase(); 
            // https://www.programiz.com/javascript/library/array/includes
            // "includes" checks whether computerChoice contains what is of selectLowerCase
            if(computerChoice.includes(selectLowerCase)){
                validInput = true;
                return selectLowerCase;
            } else {
                console.log(`Please play the game properly.\nEnter 'rock', 'paper', or 'scissors' to play.`)
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