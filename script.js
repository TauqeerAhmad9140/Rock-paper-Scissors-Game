let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
 msg.innerText = "Game was Draw. Play again.";
 msg.style.backgroundColor = "#081b31" ;
};

const showWinner = (userWin, userChoice, CompChoice) => {
    if(userWin) {
        userScore++; 
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green" ;
    } else {
        CompScore++; 
        CompScorePara.innerText = CompScore;
         msg.innerText = `You lost. ${CompChoice} beats Your ${userChoice}`;;
         msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
//Genrate Computer choice => modular
const CompChoice = genCompChoice();

if(userChoice === CompChoice) {
//Draw game
drawGame();
} else {
    let userwin = true;
    if(userChoice === "rock"){
        //scissors, paper
      userWin =  CompChoice ==="paper"? false : true;
    } else if(userChoice === "paper") {
        //rock, scissors
         userWin = CompChoice === "scissors" ? false :true;
    } else {
        //rock,paper
         userWin = CompChoice ==="rock" ? false :true;
    }
   showWinner(userWin, userChoice, CompChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});