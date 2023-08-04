let getComputerChoice = () => {
  const decision = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * decision.length);
  // Validación -> console.log(decision[random]);
  return decision[random];
};

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  switch (player) {
    case "rock":
      switch (computerSelection) {
        case "paper":
          return "Paper beats rock, computer win";
          break;
        case "scissors":
          return "Rock beats scissors, player win";
          break;
        default:
          return "It's a tie!";
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "Paper beats rock, player win";
          break;
        case "scissors":
          return "Scissors beats paper, computer win";
          break;
        default:
          return "It's a tie!";
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "paper":
          return "Scissors beats paper, player win";
          break;
        case "rock":
          return "Rock beats scissors, computer win";
          break;
        default:
          return "It's a tie!";
      }
      break;
    default:
      return "The name is incorrect, try again";
      break;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));