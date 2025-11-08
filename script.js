let humanScore = 0
let computerScore = 0
let rock = document.querySelector("#rock")
let scissor = document.querySelector("#scissor")
let paper = document.querySelector("#paper")
let btn = document.querySelectorAll("button")
let div = document.querySelector("div")
let humanChoice
let gameOver = false


function getComputerChoice () {
                 let min = 1;
                 let max = 4;
                 let computerChoice = Math.floor(Math.random()*(max-min)+min)
                 return computerChoice
                  }


scissor.addEventListener("click", function () {
   humanChoice = 2
   playRound()
})
rock.addEventListener("click", function () {
   humanChoice = 1
   playRound()
})

paper.addEventListener("click", function () {
   humanChoice = 3
   playRound()
})
      
              

function playRound () {
   if (gameOver) return
   if (gameOver) return
   if (computerScore === 5 || humanScore ===5) return
      if (computerScore === 5) {
         let span = document.createElement("span")
         span.textContent = 'Computer Won!'
         div.innerHTML = ""
         div.appendChild(span)
         gameOver = true
         return
      }
      else if (humanScore === 5){
         let span = document.createElement("span")
         span.textContent = 'Human Won!'
         div.innerHTML = ""
         div.appendChild(span)
         gameOver = true
         return
      }
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
     if (humanChoice === 1 && computerChoice === 2) {
        humanScore = humanScore + 1
        let span = document.createElement("span")
        span.textContent = ' Congratulations! You won! Rock beats scissors! Human Score = ' + humanScore + ' Computer Score = ' + computerScore
        div.innerHTML = ""
        div.appendChild(span)

     }
     else if (humanChoice === 2 && computerChoice === 3) {
        humanScore = humanScore + 1
        let span = document.createElement("span")
        span.textContent = ' Congratulations! You won! Scissors beats paper! Human Score = ' + humanScore + ' Computer Score = ' + computerScore
        div.innerHTML = ""
        div.appendChild(span)
     }
     else if (humanChoice === 3 && computerChoice === 1) {
        humanScore = humanScore + 1
        let span = document.createElement("span")
        span.textContent = ' Congratulations! You won! Paper beats rock! Human Score = ' + humanScore + ' Computer Score = ' + computerScore
        div.innerHTML = ""
        div.appendChild(span)
     }
     else if (humanChoice === 2 && computerChoice === 1) {
        computerScore = computerScore + 1
        let span = document.createElement("span")
        span.textContent = 'Boo! You lost! Rock beats scissors! Human Score = ' + humanScore + 'Computer Score = ' + computerScore
        div.innerHTML = ""
        div.appendChild(span)
     }
     else if (humanChoice === 3 && computerChoice === 2) {
        computerScore = computerScore + 1
        let span = document.createElement("span")
        span.textContent = 'Boo! You lost! Scissors beats paper! Human Score = ' + humanScore + 'Computer Score = ' + computerScore
        div.innerHTML = ""
        div.appendChild(span)
     }
     else if (humanChoice === 1 && computerChoice === 3) {
        computerScore = computerScore + 1
        let span = document.createElement("span")
        span.textContent = 'Boo! You lost! Paper beats rock! Human Score = ' + humanScore + ' Computer Score = ' + computerScore
        div.innerHTML = ""
        div.appendChild(span)
      }
     else if (humanChoice === computerChoice) {
      let span = document.createElement("span")
      span.textContent = 'Haha! You drew! Human Score = ' + humanScore + " Computer Score = " + computerScore
      div.innerHTML = ""
      div.appendChild(span)
      }
      if (computerScore === 5 || humanScore ===5) return
      if (computerScore === 5) {
         let span = document.createElement("span")
         span.textContent = 'Computer Won!'
         div.innerHTML = ""
         div.appendChild(span)
         gameOver = true
         return
      }
      else if (humanScore === 5){
         let span = document.createElement("span")
         span.textContent = 'Human Won!'
         div.innerHTML = ""
         div.appendChild(span)
         gameOver = true
         return
      }
}

if (computerScore === 5) {
         let span = document.createElement("span")
         span.textContent = 'Computer Won!'
         div.innerHTML = ""
         div.appendChild(span)
      }
      else if (humanScore === 5){
         let span = document.createElement("span")
         span.textContent = 'Human Won!'
         div.innerHTML = ""
         div.appendChild(span)
      }






   
    
    

