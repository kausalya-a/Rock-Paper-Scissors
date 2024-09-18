const playerDisplay=document.getElementById("player-choice");
const computerDisplay=document.getElementById("computer-choice");
const resultDisplay=document.getElementById("resultDisplay");

const choices=["Rock","Paper","Scissors"];
//function
function Game(playerChoice){
 const computerChoice=choices[Math.floor(Math.random()*3)];
 
 const getResult=(playerChoice, computerChoice) =>
playerChoice===computerChoice?"Tie":
(playerChoice==="Rock"&& computerChoice==="Scissors")||
(playerChoice==="Paper"&& computerChoice==="Rock")||
(playerChoice==="Scissors"&& computerChoice==="Paper")
? "Win"
: "Lose";
const result=getResult(playerChoice,computerChoice);
resultDisplay.textContent=result;
playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

resultDisplay.style.backgroundColor=
result==="Tie"
?"blue"
:result==="Win"
?"green"
:"red";
resultDisplay.style.display="2px solid transparent";
resultDisplay.style.color="white";
}
