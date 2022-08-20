const rockPaperScissors = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return computerChoice;
}

function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a draw!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors."
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock."
    }
}

const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRockPaperScissors(playerSelection, computerSelection));