function getComputerChoice() {
  let getRandomNumber = () => Math.floor(Math.random() * 3);
  let randomNumber = getRandomNumber();

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }  
}

function announceWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return console.log(`You win ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    return console.log(`You lose ${computerScore} - ${humanScore}`);
  } else {
    return console.log(`It was a tie, ${humanScore} - ${computerScore}`);
  }
}

let humanScore = 0;
let computerScore = 0;
let roundResultDiv = document.querySelector(".round-result");
let scoreDiv = document.querySelector(".score");
let winnerDiv = document.querySelector(".winner");

function playRound() {
  let humanChoice = this.textContent.toLowerCase();
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundResultDiv.textContent = "Tie";
  } else if ((humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors")) {
    humanScore += 1;
    roundResultDiv.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore +=1;
    roundResultDiv.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
  }
  scoreDiv.textContent = `Score: Human ${humanScore} - ${computerScore} Computer`;
  if (humanScore === 5) {
    winnerDiv.textContent = "You win";
  } else if (computerScore === 5) {
    winnerDiv.textContent = "You lose, computer wins";
  }
}

function playGame() {
  playRound();
  announceWinner(humanScore, computerScore);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));
