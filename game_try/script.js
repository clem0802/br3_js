function game () {
   let playerScore = 0;
   let computerScore = 0;
   let rounds = 0;

   // FUNCTION to play game
   let play = () => {
      let rockButton = document.querySelector(".rock");
      let paperButton = document.querySelector(".paper");
      let scissorsButton = document.querySelector(".scissors");
      let playerSelections = [rockButton, paperButton, scissorsButton];
      let computerSelections = ["rock", "paper", "scissors"];

      playerSelections.forEach(choice => {
         choice.addEventListener("click", function(){
            let roundsLeft = document.querySelector(".roundsLeft");
            rounds++;
            roundsLeft.innerText = `Rounds Left: ${10-rounds}`;

            let selectNumber = Math.floor(Math.random () * 3);
            let computerSelect = computerSelections[selectNumber];

            winner(this.innerText, computerSelect);

            // to call gameOver function after 10 rounds
            if(rounds == 10) {
               gameOver(playerSelections, roundsLeft)
            }
         })
      })
   }

   // FUNCTION to declare the "winner"
   let winner = (player, computer) => {
      let result = document.querySelector(".result");
      let playerScoreCount = document.querySelector(".count_player");
      let computerScoreCount = document.querySelector(".count_computer");
      player = player.toLowerCase();
      computer = computer.toLowerCase();

      if (player === computer) {
         result.textContent = "It is a tie."
      } else if (player == "rock") {
         if (computer == "paper") {
            result.textContent = "Computer won.";
            computerScore++;
            computerScoreCount.textContent = computerScore;
         } else {
            result.textContent = "Player won.";
            playerScore++;
            playerScoreCount.textContent = playerScore;
         }
      } else if (player == "paper") {
         if (computer == "scissors") {
            result.textContent = "Computer won.";
            computerScore++;
            computerScoreCount.textCont = computerScore;
         } else {
            result.textContent = "Player won.";
            playerScore++;
            playerScoreCount.textContent = playerScore;
         }
      } else if (player == "scissors") {
         if (computer == "rock") {
            result.textContent = "Computer won.";
            computerScore++;
            computerScoreCount.textContent = computerScore;
         } else {
            result.textContent = "Player won.";
            playerScore++;
            playerScoreCount.textContent = playerScore;
         }
      }
   }

   // FUNCTION for "gameOver"
   let gameOver = (playerSelections, roundsLeft) => {
      let activateRound = document.querySelector(".round");
      let result = document.querySelector(".result");
      let resetButton = document.querySelector(".reset")

      playerSelections.forEach(choice => {
         choice.style.display = "none";
      })

      activateRound.innerText = "GAME OVER!!";
      roundsLeft.style.display = "none";

      if(playerScore > computerScore){
         result.style.fontSize = "50px";
         result.innerText = "YOU'VE WON THE GAME!";
         result.style.color = "green";
      } else if(playerScore < computerScore) {
         result.style.fontSize = "50px";
         result.innerText = "YOU'VE LOST THE GAME!";
         result.style.color = "red";
      } else {
         result.style.fontSize = "50px";
         result.innerText = "IT IS A TIE!";
         result.style.color = "blue";
      }

      resetButton.innerText = "RESET";
      resetButton.style.display = "flex";
      resetButton.addEventListener("click", () => {
         window.location.reload();
      })
   }

   play();
}

game();