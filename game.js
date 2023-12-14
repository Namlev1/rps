const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        return rock(computerSelection);
    }
    else if (playerSelection == "paper") {
        return paper(computerSelection);
    }
    else if (playerSelection == "scissors") {
        return scissors(computerSelection);
    }
    else {
        return "Wrong input"
    }
}

function rock(computerSelection) {
    if (computerSelection == ROCK)
        return "It's a draw. Rock and rock";
    if (computerSelection == PAPER)
        return "You lose. Paper beats rock";
    return "You win. Rock beats scissors";
}

function paper(computerSelection) {
    if (computerSelection == ROCK)
        return "You win. Paper beats rock";
    if (computerSelection == PAPER)
        return "It's a draw. Paper and paper";
    return "You lose. Scissors beat paper";
}

function scissors(computerSelection) {
    if (computerSelection == ROCK)
        return "You lose. Rock beats scissors";
    if (computerSelection == PAPER)
        return "You win. Scissors beat paper";
    return "It's a draw. Scissors and scissors";
}

const playerSelection = prompt("Rock, paper, scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));