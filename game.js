const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRock() {
    let computerSelection = getComputerChoice();
    if (computerSelection == ROCK)
        return ["Rock", "Rock", "Draw"];

    if (computerSelection == PAPER)
        return ["Rock", "Paper", "Lose"];

    return ["Rock", "Scissors", "Win"];
}

function playPaper() {
    let computerSelection = getComputerChoice();
    if (computerSelection == ROCK)
        return ["Paper", "Rock", "Win"];

    if (computerSelection == PAPER)
        return ["Paper", "Paper", "Draw"];

    return ["Paper", "Scissors", "Lose"];
}

function playScissors() {
    let computerSelection = getComputerChoice();
    if (computerSelection == ROCK)
        return ["Scissors", "Rock", "Lose"];
    if (computerSelection == PAPER)
        return ["Scissors", "Paper", "Win"];
    return ["Scissors", "Scissors", "Draw"];
}


const btn1 = document.querySelector('#rock');
function handleBtn1Click() {
    let result = playRock();
    addResult(result);
}
btn1.addEventListener('click', handleBtn1Click);

const btn2 = document.querySelector('#scissors');
function handleBtn2Click() {
    let result = playScissors();
    addResult(result);
}
btn2.addEventListener('click', handleBtn2Click);

const btn3 = document.querySelector('#paper');
function handleBtn3Click() {
    let result = playPaper();
    addResult(result);
}
btn3.addEventListener('click', handleBtn3Click);

const score = document.querySelector('.score');
let userScore = 0;
let computerScore = 0;
let n = 0;

function addResult(result) {
    n++;
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = result[0];
    const td2 = document.createElement('td');
    td2.textContent = result[1];
    const td3 = document.createElement('td');

    if (result[2] == "Win")
        userScore++;
    else if (result[2] == "Lose")
        computerScore++;
    else {
        userScore++;
        computerScore++;
    }

    td3.textContent = userScore.toString() + ':' + computerScore.toString();

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    score.appendChild(tr);

    if (n == 5)
        endGame();
}

function endGame() {
    btn1.removeEventListener('click', handleBtn1Click);
    btn2.removeEventListener('click', handleBtn2Click);
    btn3.removeEventListener('click', handleBtn3Click);

    const resultDiv = document.querySelector('.result');
    let text;

    if (userScore > computerScore)
        text = "You have won!";
    else if (userScore < computerScore)
        text = "Computer has won!";
    else
        text = "It's a draw!";

    resultDiv.textContent = text;

}