const rockPaperScissors = ['rock', 'paper', 'scissors'];

let win;
let lose;

function getComputerChoice() {
    const computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return computerChoice;
}

function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a draw!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        let win += 1;
        return "You win! Rock beats scissors."
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        let lose += 1;
        return "You lose! Paper beats rock."
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a draw!";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return "It's a draw!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        let lose += 1;
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        let win += 1;
        return "You win! Paper beats rock.";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        let lose += 1;
        return "You lose! Rock beats scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        let win += 1;
        return "You win! Scissors beats paper.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRockPaperScissors(playerSelection, computerSelection));
    }
    if (win > lose) {
        console.log("You won, your score was: " + win + " and the computer's score was: " + lose ".");
    } else if (win < lose) {
        console.log("You lost, your score was: " + win + " and the computer's score was: " + lose ".");
    }
}

game();