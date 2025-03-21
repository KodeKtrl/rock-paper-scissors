console.log("test connection")

let playerScore = 0;
let computerScore = 0;



function computerChoice(choice){
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

function playerChoice(choice){
    choice = prompt("1. Rock, 2. Paper or 3. Scissors?")
    if (choice == 1){
        choice = "rock"
    }
    else if (choice == 2){
        choice = "paper"
    }
    else if(choice == 3){
        choice = "scissors"
    }
    else{
        choice = "unknown value"
    }
    return choice
    
}

console.log(playerChoice())
console.log(computerChoice())