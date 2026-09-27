let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const updateUserScore = document.querySelector("#user-score");
const updateCompScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "scissors", "paper"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw! Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        updateUserScore.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        updateCompScore.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("computer choice is =", compChoice);
    
    if(userChoice === compChoice) {
    drawGame()
} else {
    userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });  
});