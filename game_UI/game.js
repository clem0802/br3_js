let playerScore = 0;
let computerScore = 0;
let playerScorePart = document.getElementById("player_score"); // span1
let computerScorePart = document.getElementById("computer_score"); // span2
let resultText = document.getElementById("result");
let buttons = document.querySelectorAll(".choice");

// set score limit to 5
let score = 5;

function gameOver() {
  if (playerScore === score) {
   confirm(`Game over, player won. Would you like to try again?`);
  } else if (computerScore === score) {
    confirm(`Game over, computer won. Would you like to try again?`);
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    let playerChoice = buttons[i].textContent;
    let computerChoice =
      buttons[Math.floor(Math.random() * buttons.length)].textContent;
    let result = "";

    if (playerChoice === computerChoice) {
      result = "both tied";
      resultText.style.color = "blue";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "player won";
      resultText.style.color = "green";
      playerScore++;
      playerScorePart.textContent = playerScore;
      playerScorePart.style.color = "green";
    } else {
      result = "computer won";
      resultText.style.color = "red";
      computerScore++;
      computerScorePart.textContent = computerScore;
      computerScorePart.style.color = "red";
    }

    resultText.innerHTML = `
    -Player : ${playerChoice} </br>
    -Computer : ${computerChoice} </br>
    -Result : ${result}
    `;

    gameOver();

    // -----------------------------------------

    if (computerScore === score || playerScore === score) {
      document.location.reload();
    }
  });
}