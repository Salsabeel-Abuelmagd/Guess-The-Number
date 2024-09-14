'use strict';

let check = document.querySelector(".check");
let again = document.querySelector(".again");


let guess = document.querySelector(".guess");
// let number = document.querySelector(".number");

//
let myNUM = Math.trunc(Math.random() * 20) + 1;

// guess.textContent = myNUM;

let score = 20;
let highScore = 0;
//
function displayMessage(message){
    document.querySelector(".message").textContent = message;
}
//
check.addEventListener('click',function (){
    let number = Number(document.querySelector(".number").value);
//No number 
    if(!number){
        displayMessage("No Number!");
    }
//WIN 
    else if(number === myNUM){
        displayMessage("OHH YOU WIN ✔")
        guess.textContent = myNUM;
        document.body.style.backgroundColor = '#60b347';
        if(highScore < score){
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }
    }
//NOT CORRECT NUMBER
    else if(number !== myNUM){
        if(score > 1){
            displayMessage(number > myNUM ? "Too High!😥" : "Too Low!😪");
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            displayMessage("YOU LOST THE GAME!👋");
            document.querySelector(".score").textContent = 0;
        }  
    }
})





////AGAIN BUTTON
again.addEventListener('click',function(){
    myNUM = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start Guess Again...")
    document.querySelector(".number").value='';
    document.querySelector(".score").textContent = 20;
    score = 20;
    guess.textContent = '?'
    document.body.style.backgroundColor = '#1B2021';
})





