
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn")

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}


boxes.forEach(box => {
  box.addEventListener("click", () => {
    if(turnO === true) {
        box.innerText = "O";
        box.classList.add("Green");
        turnO = false;
    } else {
         box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
  })
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("Green")
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const isBoardFull = () => {
    return Array.from(boxes).every(box => box.innerText !== "")
};

const checkWinner = () => {
    let winnerFound = false;
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val)
                showWinner(pos1Val);
                winnerFound = true;
                break;
            } 
            }  
        } if(!winnerFound && isBoardFull()){
                msg.innerText = "It's a Tie! Nobady Wins This Time";
                msgContainer.classList.remove("hide");
                disableBoxes()

    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)





