var humanScore = 0;
var computerScore = 0;
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
        humanScore ++;
       return `Player won ${playerSelection} beats ${computerSelection}!`
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore ++;
        return `Computer won ${computerSelection} beats ${playerSelection}!`;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        humanScore ++;
        return `Player won ${playerSelection} beats ${computerSelection}!`
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore ++;
        return `Computer won ${computerSelection} beats ${playerSelection}!`;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        humanScore ++;
        return `Player won ${playerSelection} beats ${computerSelection}!`;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore ++;
        return `Computer won ${computerSelection} beats ${playerSelection}!`;
    }
    else {
        let draw = "draw";
        return {
            message: "It was a draw!",
            variable: draw
        };
    }
}

let game = () => {
    var i=0
    while ( i<5){
        console.log(playRound());
        i++
        if (playRound.varaible === "draw") {
            i--
        }
    }
    if (humanScore > computerScore) {
        console.log(`Player won, Score: ${humanScore} : ${computerScore}`);
    }
    else {
        console.log(`Computer won, Score: ${computerScore} : ${humanScore}`)
    }
}
game();
