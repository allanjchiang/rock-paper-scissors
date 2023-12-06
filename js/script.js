var win = 0;
var lose = 0;
const rockPaperScissors = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return computerChoice;
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRockPaperScissors(rock);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRockPaperScissors(paper);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRockPaperScissors(scissors);
});


function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a draw!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        win++;
        const results = document.querySelector('.results');

        const rockBeatsScissors = document.createElement('p');
        rockBeatsScissors.classList.add('rockBeatsScissors');
        rockBeatsScissors.textContent = 'You win! Rock beats scissors.';

        results.appendChild(rockBeatsScissors);
        console.log("You win! Rock beats scissors.");
        return "You win! Rock beats scissors";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        lose++;
        const results = document.querySelector('.results');

        const rockLose = document.createElement('p');
        rockLose.classList.add('rockLose');
        rockLose.textContent = 'You lose! Paper beats rock';

        results.appendChild(rockLose);

        console.log("You lose! Paper beats rock.");
        return "You lose! Paper beats rock.";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        const results = document.querySelector('.results');

        const paperDraw = document.createElement('p');
        paperDraw.classList.add('paperDraw');
        paperDraw.textContent = "It's a draw!";

        results.appendChild(paperDraw);
        
        console.log("It's a draw!");
        return "It's a draw!";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        const results = document.querySelector('.results');

        const scissorsDraw = document.createElement('p');
        scissorsDraw.classList.add('scissorsDraw');
        scissorsDraw.textContent = "It's a draw!";

        results.appendChild(scissorsDraw);

        console.log("It's a draw!");
        return "It's a draw!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        lose++;
        const results = document.querySelector('.results');

        const paperLose = document.createElement('p');
        paperLose.classList.add('paperLose');
        paperLose.textContent = "You lose! Scissors beats paper.";

        results.appendChild(paperLose);

        console.log("You lose! Scissors beats paper.");
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        win++;

        const results = document.querySelector('.results');

        const paperWin = document.createElement('p');
        paperWin.classList.add('paperWin');
        paperWin.textContent = "You win! Paper beats rock.";

        results.appendChild(paperWin);

        console.log("You win! Paper beats rock.");
        return "You win! Paper beats rock.";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        lose++;

        const results = document.querySelector('.results');

        const scissorsLose = document.createElement('p');
        scissorsLose.classList.add('scissorsLose');
        scissorsLose.textContent = "You lose! Rock beats scissors";

        results.appendChild(scissorsLose);
        console.log("You lose! Rock beats scissors");
        return "You lose! Rock beats scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        win++;

        const results = document.querySelector('.results');

        const scissorsWin = document.createElement('p');
        scissorsWin.classList.add('scissorsWin');
        scissorsWin.textContent = "You win! Scissors beats paper.";

        results.appendChild(scissorsWin);

        console.log("You win! Scissors beats paper.");
        return "You win! Scissors beats paper.";
    }
}

function game() {
    for(let i = 0; i < 10; i++) {
        if(win === 5 || lose === 5) {
            const rock = document.querySelector('#rock');
            rock.addEventListener('click', () => {
                playRockPaperScissors(rock);
            });

            const paper = document.querySelector('#paper');
            paper.addEventListener('click', () => {
                playRockPaperScissors(paper);
            });

            const scissors = document.querySelector('#scissors');
            scissors.addEventListener('click', () => {
                playRockPaperScissors(scissors);
            });
            const computerSelection = getComputerChoice();
            console.log(playRockPaperScissors(playerSelection, computerSelection));
        }
    }
    if (win > lose) {
        console.log(`You won, your score was: ${win}. \nThe computer's score was: ${lose}. \nYou won by ${win - lose} points.`);
    } else if (win < lose) {
        console.log(`You lost, your score was: ${win}. \nThe computer's score was: ${lose}. \nYou lost by ${lose - win} points.`);
    } else if (win === lose) {
        console.log(`You tied! Your score was: ${win}. \nThe computer's score was: ${lose}.`);
    }
}



game();

