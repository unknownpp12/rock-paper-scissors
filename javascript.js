let choice =" ";
let choice1= " ";
let humanScore= 0;
let computerScore =0;

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
};
function getComputerChoice(){
    let num= Math.floor(Math.random()*3);
    if (num ==0){
        choice1 = "rock";
        console.log ("rock");
    }
    else if(num ==1){
        choice1= "paper";
        console.log("paper");
    }
    else if(num==2){
        choice1= "scissors"
        console.log("scissors");
    }
    else {
        return null;
    }};
function playRound(){
    if(choice=="rock" &&choice1=="rock"){
        console.log("It's a tie");

    }
    else if(choice=="paper" &&choice1=="paper"){
        console.log("It's a tie");
    }
    else if(choice=="scissors" &&choice1=="scissors"){
        console.log("It's a tie");
    }
    else if (choice == "rock" && choice1=="scissors"){
        console.log("You win!");
        humanScore++;
    }
    else if( choice =="rock" && choice1=="paper"){
        console.log("You lose!");
        computerScore++;
    }
    else if ( choice == "paper" && choice1 == "rock"){
        console.log("You win!");
        humanScore++
    }
    else if (choice == "paper"&& choice1== "scissors"){
        console.log("You lose!");
        computerScore++;
    }
    else if(choice == "scissors"&& choice1 == "paper"){
        console.log("You win!");
        humanScore++;
    }
    else if( choice== "scissors"&& choice1=="rock" ){
        console.log("You lose!");
        computerScore++;
    }
};
function playGame(){
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
playGame();



fuck