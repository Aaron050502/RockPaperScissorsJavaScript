const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissors = document.querySelector("#scissorsButton")
const buttons = document.querySelector("#buttons")
const result = document.querySelector("#results")
let humanScore = 0;
let computerScore = 0;
let roundResult = document.createElement("p");
let currentScore = document.createElement("p");
result.appendChild(roundResult);
result.appendChild(currentScore);

buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {

        case "rockButton":
            playRound("rock", getComputerChoice());
            break;
        
        case "paperButton":
            playRound("paper", getComputerChoice())    
            break;
        
        case "scissorsButton":
            playRound("scissors", getComputerChoice())
            break;
    }
});


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
        
        
        roundResult.textContent = log;
        let currentScoreText = "";
        if(humanScore != 5 && computerScore != 5) {
            currentScoreText = `Current Score: You:${humanScore} Computer:${computerScore}`;
        } else if (humanScore === 5) {
            
            currentScoreText = "You won the game, congratulations! Resetting scores...";
            humanScore = 0;
            computerScore = 0;
        } else {
           
            currentScoreText = "You lost the game better luck next time! Resetting scores...";
            humanScore = 0;
            computerScore = 0;
        }
        
        currentScore.textContent = currentScoreText;
    }


