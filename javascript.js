let humanScore= 0;
let computerScore =0;
let choice1="";
function getComputerChoice(){
    let num= Math.floor(Math.random()*3);
    if (num ==0){
        choice1 = "rock";
    }
    else if(num ==1){
        choice1= "paper";
    }
    else if(num==2){
        choice1= "scissors";
    }
    else {
        return null;
    }};
function playRound(e){
    let playerChoice= e.target.textContent.toLowerCase();
    console.log("Player:",playerChoice);
    getComputerChoice(); 
    let computerChoice=choice1;
    console.log("Computer:",computerChoice);
    if(playerChoice===computerChoice){
        console.log("It's tie!");
        result.textContent="It's tie! ";
    }
    else if (playerChoice=='rock' && computerChoice== 'scissors'){
        console.log("You win!");  
        result.textContent="You win!  ";
        humanScore++;
    }
    else if( playerChoice=="paper"&& computerChoice=="rock"){
        console.log("You win!");
        result.textContent="You win!";
        humanScore++;
    }
    else if(playerChoice=="scissors"&& computerChoice=="paper"){
        console.log("You win!");
        result.textContent="You win!";
        humanScore++;
    }
    else{
        console.log("You lose!!");
        result.textContent="You lose!";
        computerScore++;
    }
    compChoice.textContent=`computerChoice:${computerChoice}`;
    humChoice.textContent=`playerChoice:${playerChoice}`;
    humScore.textContent=`humanScore:${humanScore}`;
    compScore.textContent=`computerScore:${computerScore}`;
};

let button_1=document.querySelector('.first');
let button_2=document.querySelector('.second');
let button_3=document.querySelector('.third');
button_1.addEventListener('click',playRound);
button_2.addEventListener('click',playRound);
button_3.addEventListener('click',playRound);
let humScore= document.querySelector('.humanScore');
let compScore= document.querySelector('.computerScore');
let result= document.querySelector('.result');
let humChoice=document.querySelector(".humanChoice");
let compChoice=document.querySelector(".computerChoice");




