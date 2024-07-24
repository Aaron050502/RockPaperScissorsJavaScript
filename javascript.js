


function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3);
    const rock = "rock";
    const paper = "paper"
    const scissors = "scissors";
    
    if (randomNumber === 0) {
        return rock;
    } else if (randomNumber === 1) {
        return paper;
    } else if (randomNumber === 2) {
        return scissors;
    } else {
        return "Error";
    } 
}

function getHumanChoice() {
    
    let userInput = prompt("Choose rock, paper or scissors");
    userInput = userInput.toLowerCase();

    if (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
        console.log("Invalid answer, choose either rock, paper or scissors");
        return getHumanChoice();
    }

    return userInput;
}


function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
    
        let validateAnswer = humanChoice;
        let result;
    
        if (validateAnswer === "rock") {
    
            if(computerChoice === "rock") {
                result = "draw";
            } else if (computerChoice === "paper") {
                result = "lose";
            } else {
                result = "win";
            }
    
        } else if (validateAnswer === "paper") {
    
            if(computerChoice === "rock") {
                result = "win";
            } else if (computerChoice === "paper") {
                result = "draw";
            } else {
                result = "lose";
            }
        } else {
    
            if(computerChoice === "rock") {
                result = "lose";
            } else if (computerChoice === "paper") {
                result = "win";
            } else {
                result = "draw";
            }
        }
    
        let log;
        if (result === "draw") {
            log = `You drew! ${humanChoice} draws ${computerChoice}`
        } else if (result === "win") {
            log = `You win! ${humanChoice} beats ${computerChoice}`
            humanScore++;
        } else {
            log = `You lose! ${computerChoice} beats ${humanChoice}`
            computerScore++;
        }
    
        console.log(log);
        console.log(`Current Score: You:${humanScore} Computer:${computerScore}`);
    }



    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore) {
        console.log(`You win ${humanScore}:${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! ${humanScore}:${computerScore}`);
    } else {
        console.log(`You drew! FinalScore: ${humanScore}: ${computerScore}`);
    }
}

playGame();