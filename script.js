let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, scissors?", '');
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    return console.log("You win, rock beats scissors");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return console.log("You win, scissors beats paper");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return console.log("You win, paper beats rock");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return console.log("You lose, rock beats scissors");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return console.log("You lose, scissors beats paper");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return console.log("You lose, paper beats rock");
  } else if (humanChoice === computerChoice) {
    return console.log("Tie");
  }
}
