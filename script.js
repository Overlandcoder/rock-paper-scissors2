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

function announceWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return console.log(`You win ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    return console.log(`You lose ${computerScore} - ${humanScore}`);
  } else {
    return console.log(`It was a tie, ${humanScore} - ${computerScore}`);
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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
  playRound();
  playRound();
  playRound();
  playRound();
  announceWinner(humanScore, computerScore);
}

playGame();
