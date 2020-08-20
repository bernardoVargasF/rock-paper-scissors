//0 Draw
//1 Lose
//2 Win 

function computerPlay() {
    let ran = Math.floor(Math.random() * 3) + 1;
    let computerChoose;
    ran === 1 ? computerChoose = 'rock' :
        ran === 2 ? computerChoose = 'paper' : computerChoose = 'scissors';
    return computerChoose;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log('Player choose: ' + playerSelection);
    console.log('Computer choose: ' + computerSelection);

    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'
        || playerSelection === 'paper' && computerSelection === 'scissors'
        || playerSelection === 'scissors' && computerSelection === 'rock') {
        return 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
        return 2;
    }
}

function gameFive() {
    let winCount = 0;
    for (let i = 0; i <= 5; i++) {
        playerSelection = prompt("Rock, paper, scissors?");
        let result = playRound(playerSelection, computerPlay());
        console.log(result);
        if (result.includes('win')) {
            winCount++;
        }
    }
    console.log(`You won ${winCount} out of 5 times!`);
}

const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('click', () => {
        let computerChoose = computerPlay();
        let output = playRound(image.id, computerChoose);
        output === 0? alert("It's a draw") :
            output === 1? alert("You lose") :
                            alert("You win");
        
        const cmpImg = document.getElementById("computerChoose");
        cmpImg.setAttribute('src', './images/' + computerChoose + '.png');
        cmpImg.setAttribute('style', 'display: block;');
    });
});