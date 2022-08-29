//Function that at random returns rock paper or scissors: This will be computers choice
function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomGenerate = Math.floor(Math.random()*choices.length);
    let randomChoice = choices[randomGenerate];
    return randomChoice;
}

//Player Scores 
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;


//Function that plays a single round of RPS, takes 2 parameters (playerSelection,computerSelection)
//Declares a winner, Returns the results of round
//Increment score depending on round outcome and return the score to global scope
function playRound (playerSelection = playerChoice, computerSelection = getComputerChoice()){
    
    if (playerSelection === computerSelection) {
        results.textContent = ("Tie! What are the odds? " + computerSelection + " was chosen by both players.");
        tieScore++;
        return (tieScore);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        results.textContent =("Dwayne would be proud! " + playerSelection + " beats " + computerSelection + ".");
        pScore.textContent = "Your Score: " + ++playerScore;
        return (playerScore);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        results.textContent =("Don't underestimate Paper! " + playerSelection + " beats " + computerSelection + ".");
        pScore.textContent = "Your Score: " + ++playerScore;
        return (playerScore);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        results.textContent =("You're cutting em up out there! " + playerSelection + " beats " + computerSelection + ".");
        pScore.textContent = "Your Score: " + ++playerScore;
        return (playerScore);
    } else {
        results.textContent =("You lose this round. " + playerSelection + " was beaten by " + computerSelection + ".");
        cScore.textContent = "Computer Score: " + ++computerScore;
        return (computerScore);
    }
}

function keepScore () { 
        //once player score or comp score reaches 5 announce winner 
        if (playerScore === 5) {
            mResult.textContent = " Congratulations You Win! You got it like that huh? Refresh to try again."
            disableBtn();
        } else if (computerScore === 5) {
            mResult.textContent = "Damn. Maybe next time bucko. Refresh to try again "
            buttons.disabled = true;
            disableBtn();
        }
    }

//UI INTERACTION

//Create a variable to store the buttons in the DOM
const buttons = document.querySelectorAll('.btn');        


//Add eventListener to each button by looping through them with forEach, assign playerChoice to the textContent of the current button pressed
//call playRound
buttons.forEach((button) => {
    button.addEventListener("click", () => {
       playerChoice = button.textContent;
       playRound();
       keepScore();
    });
  });

  //Create variable for round results 
const results = document.querySelector('.results');

//player score
const pScore = document.querySelector('.p-score');
pScore.textContent = "Your score: " + playerScore;

//comp score
const cScore = document.querySelector('.c-score');
cScore.textContent = "Computer score: " + computerScore;

// final match result
const mResult = document.querySelector('.match-result');

//disable button function when score of 5 is reached
function disableBtn (){
    document.querySelector('.btn1').disabled = true;
    document.querySelector('.btn2').disabled = true;
    document.querySelector('.btn3').disabled = true;
}
