let getComputerChoice = () => { // gets computer choices returns choice based on random number 1-3
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
let playRound = (playerSelection, computerSelection) => {
    playerSelection = prompt("Rock, Paper, or Scissors.");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection);

    if (playerSelection === "rock" && computerSelection === "scissors") {
       return `Player won ${playerSelection} beats ${computerSelection}!`
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return `Computer won ${computerSelection} beats ${playerSelection}!`;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return `Player won ${playerSelection} beats ${computerSelection}!`
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `Computer won ${computerSelection} beats ${playerSelection}!`;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `Player won ${playerSelection} beats ${computerSelection}!`;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `Computer won ${computerSelection} beats ${playerSelection}!`;
    }
    else {
        return `It was a draw!`;
    }
}

let game = () => {
    for (let i = 0; i<5; i++) {
        console.log(playRound());
    }
}
game();
