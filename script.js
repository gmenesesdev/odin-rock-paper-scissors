function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getPlayerSelection() {
  let selection = prompt("Ingresa 'rock', 'paper' o 'scissor'")
    .trim()
    .toLowerCase();

  while (
    selection !== "rock" &&
    selection !== "paper" &&
    selection !== "scissor"
  ) {
    alert("Selección inválida. Ingresa 'rock', 'paper' o 'scissor'");
    selection = prompt("Ingresa 'rock', 'paper' o 'scissor'")
      .trim()
      .toLowerCase();
  }

  return selection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Empate";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}

function game(totalRounds) {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= totalRounds; round++) {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(`Ronda ${round}: ${result}`);

    if (result === "Ganaste") {
      playerScore++;
    } else if (result === "Perdiste") {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`Ganaste el juego con ${playerScore} victorias.`);
  } else if (computerScore > playerScore) {
    console.log(
      `Perdiste el juego. La computadora ganó con ${computerScore} victorias.`
    );
  } else {
    console.log(`El juego terminó en empate.`);
  }
}
