function getComputerChoice() {
  const choices = ['piedra', 'papel', 'tijera'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection !== 'piedra' && playerSelection !== 'papel' && playerSelection !== 'tijera') {
      return "Error: Ingresa 'piedra', 'papel' o 'tijera'";
  }

  if (playerSelection === computerSelection) {
      return "Empate";
  } else if (
      (playerSelection === 'piedra' && computerSelection === 'tijera') ||
      (playerSelection === 'papel' && computerSelection === 'piedra') ||
      (playerSelection === 'tijera' && computerSelection === 'papel')
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
      const playerSelection = prompt(`Ronda ${round}: Ingresa 'piedra', 'papel' o 'tijera'`).trim();
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
      console.log(`Perdiste el juego. La computadora ganó con ${computerScore} victorias.`);
  } else {
      console.log(`El juego terminó en empate.`);
  }
}
