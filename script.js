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
