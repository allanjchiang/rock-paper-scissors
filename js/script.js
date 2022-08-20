const rockPaperScissors = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return computerChoice;
}

function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a draw!";
    } 
}

const playerSelection = prompt("Rock, paper or scissors?");
const computerSelection = getComputerChoice();