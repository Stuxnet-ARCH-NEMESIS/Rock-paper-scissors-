    let humanScore = 0
    let computerScore = 0

function getComputerChoice () {
                 let min = 1;
                 let max = 4;
                 let computerChoice = Math.floor(Math.random()*(max-min)+min)
                 return computerChoice
                  }

function getHumanChoice () {
               let humanChoice = prompt("Enter your choice")
                     humanChoice = humanChoice.toLowerCase()
               switch (humanChoice)
               {
                  case "rock" : humanChoice = 1 ; break
                  case "scissor" : humanChoice = 2 ; break
                  case "paper" : humanChoice = 3 ; break
               }
               return humanChoice
               }

function playRound () {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
     if (humanChoice === 1 && computerChoice === 2) {
        humanScore = humanScore + 1
        console.log(" Congratulations! You won! Rock beats scissors! Human Score = " + humanScore + " Computer Score = " + computerScore)
     }
     else if (humanChoice === 2 && computerChoice === 3) {
        humanScore = humanScore + 1
        console.log(" Congratulations! You won! Scissors beats paper! Human Score = " + humanScore + " Computer Score = " + computerScore)
     }
     else if (humanChoice === 3 && computerChoice === 1) {
        humanScore = humanScore + 1
        console.log(" Congratulations! You won! Paper beats rock! Human Score = " + humanScore + " Computer Score = " + computerScore)
     }
     else if (humanChoice === 2 && computerChoice === 1) {
        computerScore = computerScore + 1
        console.log (" Boo! You lost! Rock beats scissors! Human Score = " + humanScore + " Computer Score = " + computerScore)
     }
     else if (humanChoice === 3 && computerChoice === 2) {
        computerScore = computerScore + 1
        console.log (" Boo! You lost! Scissors beats paper! Human Score = " + humanScore + " Computer Score = " + computerScore)
     }
     else if (humanChoice === 1 && computerChoice === 3) {
        computerScore = computerScore + 1
        console.log (" Boo! You lost! Paper beats rock! Human Score = " + humanScore + " Computer Score = " + computerScore)
      }
     else if (humanChoice === computerChoice) {
         console.log("Haha! You drew!")
      }
}

function playGame () {
   playRound();

   playRound();
   playRound();
   playRound();
   playRound();

}

playGame()

   
    
    

