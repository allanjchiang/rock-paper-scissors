let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound(rock);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound(paper);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound(scissors);
});


function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = getResult(playerChoice, computerChoice);

    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function getResult(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player ===' scissors' && computer === 'paper')
    ){
        return 'win';
    } else {
        return 'draw';
    }
}



function game() {
    
}



game();

