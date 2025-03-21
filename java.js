console.log("test connection")

let playerScore = 0;
let computerScore = 0;



function getComputerChoice(choice){
    randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0){
        choice = "rock"
    }
    else if (randomNumber == 1){
        choice = "paper"
    }
    else{
        choice = "scissor"
    }
    return choice
}

function getPlayerChoice(choice){
    choice = prompt("Rock, Paper or Scissors?:")
}

function playRound(humanChoice, ComputerChoice){
    console.log("You lose! Paper is king.")
    computerScore += 1;
}

for (i = 0; i <5; i++){
    playRound()
}

console.log(computerScore)