let humanScore= 0;
let computerScore =0;
let choice1="";
/*
function getHumanChoice(){
    choice = prompt("What's your choice?");
    choice= choice.toLowerCase().trim();
    if( choice ==="rock"){
        console.log("rock");
    }
    else if( choice == "paper"){
        console.log("paper");
    }
    else if( choice == "scissors"){
        console.log("scissors");
    }
    else {
        console.log("put something valid.");

    }
}; */
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
        //result.appendChild(rel);
    }
    else if (playerChoice=='rock' && computerChoice== 'scissors'){
        console.log("You win!");  
        // let rel= document.createTextNode("You win!  ");
        // result.appendChild(rel);
        result.textContent="You win!  ";
        humanScore++;
    }
    else if( playerChoice=="paper"&& computerChoice=="rock"){
        console.log("You win!");
        // let rel= document.createTextNode("You win!  ");
        // result.appendChild(rel);
        result.textContent="You win!";
        humanScore++;
    }
    else if(playerChoice=="scissors"&& computerChoice=="paper"){
        console.log("You win!");
        // let rel= document.createTextNode("You win!  ");
        // result.appendChild(rel);
        result.textContent="You win!";
        humanScore++;
    }
    else{
        console.log("You lose!!");
        // let rel= document.createTextNode("You lose!  ");
        // result.appendChild(rel);
        result.textContent="You lose!";
        computerScore++;
    }
    compChoice.textContent=`computerChoice:${computerChoice}`;
    humChoice.textContent=`playerChoice:${playerChoice}`;
    humScore.textContent=`humanScore:${humanScore}`;
    compScore.textContent=`computerScore:${computerScore}`;

    /* if(button_1.textContent=="rock" &&choice1=="rock"){
        console.log("It's a tie");
    }
    else if (button_1 == "rock" && choice1=="scissors"){
        console.log("You win!");
        humanScore++;
    }
    else if( button_1 =="rock" && choice1=="paper"){
        console.log("You lose!");
        computerScore++;
    }
    else if(button_2=="paper" &&choice1=="paper"){
        console.log("It's a tie");
    }
    else if ( button_2 == "paper" && choice1 == "rock"){
        console.log("You win!");
        humanScore++
    }
    else if (button_2 == "paper"&& choice1== "scissors"){
        console.log("You lose!");
        computerScore++;
    }
    else if(button_3=="scissors" &&choice1=="scissors"){
        console.log("It's a tie");
    }
    else if(button_3 == "scissors"&& choice1 == "paper"){
        console.log("You win!");
        humanScore++;
    }
    else if( button_3== "scissors"&& choice1=="rock" ){
        console.log("You lose!");
        computerScore++;
    } */
};
/* function playGame(){
    for ( let a=0; a<=2; a++){
        getHumanChoice();
        if(choice==="rock" || choice === "paper"|| choice ==="scissors"){
        getComputerChoice();
        playRound();
    }}
    console.log(`You scored:`+humanScore);
    console.log(`Computer Scored:`+computerScore)
    if(humanScore > computerScore){
        console.log("Congrat's! You won!");
    }
    else{
        console.log("Sorry! You lost!");
    }
};
playGame(); */
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




