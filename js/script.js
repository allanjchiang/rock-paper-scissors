let playerScore = 0;
let computerScore = 0;


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

    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
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
        return 'lose';
    }
}



function announceWinner() {
    const resultDiv = document.createElement('div');
    resultDiv.textContent =
    playerScore > computerScore 
        ? 'Congratulations! You win.' 
        : 'You lose. Better luck next time.';

    document.body.appendChild(resultDiv);

    playerScore = 0;
    computerScore = 0;

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound('scissors');
});