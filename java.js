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

function getPlayerChoice(choice){
    choice = prompt("Rock, Paper or Scissors?:")
    return choice.toString()
}


function playRound(){
    const humanChoice = getPlayerChoice().toLowerCase()
    const computerChoice = getComputerChoice()
   

    if (humanChoice == "rock" && computerChoice == "paper" ||
        humanChoice == "paper" && computerChoice == "scissors"||
        humanChoice == "scissors" && computerChoice == "rock"
    ){
        console.log(`You chose ${humanChoice}, computer chose${computerChoice}. Computer wins.`);
        computerScore += 1;
    }
    else if (humanChoice == computerChoice){
        console.log("it is a tie!")
    }
    else{
        console.log(`You chose ${humanChoice}, computer chose${computerChoice}. You win.`);
        playerScore += 1;
    }
}
