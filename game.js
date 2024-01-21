const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == ROCK) {
        return rock(computerSelection);
    }
    else if (playerSelection == PAPER) {
        return paper(computerSelection);
    }
    else if (playerSelection == SCISSORS) {
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

function game() {
    let n = 0;
    let userScore = 0;
    let computerScore = 0;
    while (n < 5) {
        const playerSelection = prompt("Rock, paper, scissors?");
        const computerSelection = getComputerChoice();
        let res = playRound(playerSelection, computerSelection);
        if (res.startsWith("Wrong")) {
            alert("Wrong input")
            continue;
        }
        if (res.startsWith("You win"))
            userScore++;
        else if (res.startsWith("You lose"))
            computerScore++;
        else {
            userScore++;
            computerScore++;
        }
        alert(res + '\n' + userScore + ':' + computerScore);
        n++;
    }

    if (userScore > computerScore)
        alert("You have won!")
    if (userScore < computerScore)
        alert("You have lost :(")
    if (userScore == computerScore)
        alert("It's a draw!")
}

// game();

let btn = document.querySelector('#rock');
btn.addEventListener('click', () => {
    console.log(playRound(ROCK, getComputerChoice()));
});
btn = document.querySelector('#scissors');
btn.addEventListener('click', () => {
    console.log(playRound(SCISSORS, getComputerChoice()));
});
btn = document.querySelector('#paper');
btn.addEventListener('click', () => {
    console.log(playRound(PAPER, getComputerChoice()));
});