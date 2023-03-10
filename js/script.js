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
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a draw!";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return "It's a draw!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock.";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRockPaperScissors(playerSelection, computerSelection));
    }
}

game();