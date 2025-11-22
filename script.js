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
  return humanChoice;
}

function playRound() {
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    return console.log("Tie");
  } else if ((humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors")) {
    humanScore += 1;
    return console.log(`You win, ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore +=1;
    return console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
  }
}

playRound();
