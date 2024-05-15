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
let playRound = (playerSelection) => {
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);

    
        if (playerSelection === "rock" && computerSelection === "scissors") {
            humanScore ++;
            updateScore();
        return `Player won ${playerSelection} beats ${computerSelection}!`
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore ++;
            updateScore();
            return `Computer won ${computerSelection} beats ${playerSelection}!`;
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            humanScore ++;
            updateScore();
            return `Player won ${playerSelection} beats ${computerSelection}!`
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore ++;
            updateScore();
            return `Computer won ${computerSelection} beats ${playerSelection}!`;
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            humanScore ++;
            updateScore();
            return `Player won ${playerSelection} beats ${computerSelection}!`;
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore ++;
            updateScore();
            return `Computer won ${computerSelection} beats ${playerSelection}!`;
        }
        else {
            return "It was a draw!"
        }
    
}

let checkWin = () => {
    if(humanScore === 5){
        resultsDiv.textContent = "You won the game!"
        return true;
    }
    else if (computerScore === 5){
        resultsDiv.textContent = "The computer has won the game!"
        return true;
    }
    else {
        return false;
    }
}

let updateScore = () => {
    scoreDiv.textContent = `${humanScore} : ${computerScore}`;
}

let resultsDiv = document.querySelector(".results");
let div = document.createElement("div");
let scoreDiv = document.querySelector(".score")

function showResultsDiv() {
    if (resultsDiv.textContent.trim() !== "") {
        resultsDiv.style.display = "block";
    }
}

resultsDiv.addEventListener("DOMNodeInserted", showResultsDiv);

updateScore(); //Updates score of game
let winStatus = false;

const rockButton = document.querySelector("#rock"); // rock button
rock.addEventListener('click', () => {
    winStatus = checkWin();
    if (winStatus != true){
        result = playRound("rock");
        div.textContent = result;
        resultsDiv.appendChild(div);
}
    
});

const paperButton = document.querySelector("#paper");
paper.addEventListener('click', () => {
    winStatus = checkWin();
    if (winStatus != true){
        result = playRound("paper");
        div.textContent = result;
        resultsDiv.appendChild(div);
    }
});

const scissorsButton = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    winStatus = checkWin();
    if(winStatus != true){
        result = playRound("scissors");
        div.textContent = result;
        resultsDiv.appendChild(div);
    }
});




