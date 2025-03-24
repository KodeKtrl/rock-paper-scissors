console.log("test connection")

let playerScore = 0;
let computerScore = 0;



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

let getPlayerChoice = null;

function playRound(){
    const humanChoice = getPlayerChoice
    const computerChoice = getComputerChoice()
   

    if (humanChoice == "rock" && computerChoice == "paper" ||
        humanChoice == "paper" && computerChoice == "scissors"||
        humanChoice == "scissors" && computerChoice == "rock"
    ){
        score.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}. Computer wins.`);
        computerScore ++;
    }
    else if (humanChoice == computerChoice){
        score.textContent = (`${humanChoice} and ${computerChoice}. It's a tie.`)
    }
    else{
        score.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}. You win.\n`);
        playerScore ++;
    }
}

const choices = document.querySelector('#choices')
const score = document.querySelector('#results')

choices.addEventListener('click', (event) =>{
    let target = event.target;

    switch(target.id){
        case 'rock':
            getPlayerChoice = 'rock'
            playRound()
            break;
        case 'paper':
            getPlayerChoice = 'paper'
            playRound()
            break;
        case 'scissors':
            getPlayerChoice = 'scissors'
            playRound()
            break;
    }
});
