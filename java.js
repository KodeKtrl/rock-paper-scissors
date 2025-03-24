console.log("test connection")

let playerScore = 0;
let computerScore = 0;
let getPlayerChoice = null;

const choices = document.querySelector('#choices')
const score = document.querySelector('#results')
const scoreTracker = document.querySelector('#scoreTracker')

scoreTracker.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`

choices.addEventListener('click', (event) =>{
    let target = event.target;

    switch(target.id){
        case 'rock':
            getPlayerChoice = 'rock'
            playGame()
            break;
        case 'paper':
            getPlayerChoice = 'paper'
            playGame()
            break;
        case 'scissors':
            getPlayerChoice = 'scissors'
            playGame()
            break;
    }
});

function getComputerChoice(computerChoice){
    randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0){
        computerChoice = "rock"
    }
    else if (randomNumber == 1){
        computerChoice = "paper"
    }
    else{
        computerChoice = "scissors"
    }
    return computerChoice
}

function playRound(){

    const humanChoice = getPlayerChoice
    const computerChoice = getComputerChoice()

    
    if (humanChoice == "rock" && computerChoice == "paper" ||
        humanChoice == "paper" && computerChoice == "scissors"||
        humanChoice == "scissors" && computerChoice == "rock"
    ){
        score.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}. Computer wins.`);
        computerScore++;
    }
    else if (humanChoice == computerChoice){
        score.textContent = (`${humanChoice} and ${computerChoice}. It's a tie.`)
    }
    else{
        score.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}. You win.\n`);
        playerScore++;
    }
    scoreTracker.textContent = `Player score: ${playerScore} Computer score: ${computerScore} ` 
}

function playGame(){
    if(playerScore < 5 && computerScore < 5){
        playRound()
    }
    else if (playerScore > computerScore){
        score.textContent = `You won!`
        score.appendChild(playAgain)
    }
    else{
        score.textContent = `Computer won!`
        score.appendChild(playAgain)
    }
}

const playAgain = document.createElement('button')

playAgain.textContent = "Play again?"

playAgain.addEventListener('click', ()=>{
    playerScore = 0;
    computerScore = 0;
    scoreTracker.textContent = `Score reset. Choose to play again!`
})