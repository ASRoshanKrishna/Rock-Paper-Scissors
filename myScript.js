let pp = 0;
let cp = 0;
let i = 1;
let count = 0;

alert("First one to score 5 wins!");

const container1 = document.querySelector(".container1");
const playerScore = document.querySelector("#score1");
const computerScore = document.querySelector("#score2");

const again = document.createElement('button');
again.textContent = "Play Again";

function getComputerChoice(){
    let c = Math.floor(Math.random() * 3);
    switch(c){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection){
    const r = 'Rock beats Scissors"';
    const p = 'Paper beats Rock"';
    const s = 'Scissors beats Paper"';
    const w = '"You Win! ';
    const l = '"You Lose! ';
    const t = "Tie!"
    const ps = playerSelection;
    const cs = getComputerChoice();
    zero();
    if(cs===ps){
        const show = document.createElement('div');
        show.textContent = "It's a Tie!";
        container1.appendChild(show);
    }
    else{
        switch(ps){
            case "rock":
                if(cs=="paper"){
                    cp++;
                    const show = document.createElement('div');
                    show.textContent = l+p;
                    container1.appendChild(show);
                    count++;
                    computerScore.textContent = cp;
                    break;
                }
                else{
                    pp++;
                    const show = document.createElement('div');
                    show.textContent = w+r;
                    container1.appendChild(show);
                    count++;
                    playerScore.textContent = pp;
                    break;
                }
            case "paper":
                if(cs=="scissors"){
                    cp++;
                    const show = document.createElement('div');
                    show.textContent = l+s;
                    container1.appendChild(show);
                    count++;
                    computerScore.textContent = cp;
                    break;
                }
                else{
                    pp++;
                    const show = document.createElement('div');
                    show.textContent = w+p;
                    container1.appendChild(show);
                    count++;
                    playerScore.textContent = pp;
                    break;
                }
            case "scissors":
                if(cs=="rock"){
                    cp++;
                    const show = document.createElement('div');
                    show.textContent = l+r;
                    container1.appendChild(show);
                    count++;
                    computerScore.textContent = cp;
                    break;
                }
                else{
                    pp++;
                    const show = document.createElement('div');
                    show.textContent = w+s;
                    container1.appendChild(show);
                    count++;
                    playerScore.textContent = pp;
                    break;
                }
        }
    }
    five();
}

function zero(){
    if(count==0){
        playerScore.textContent = pp;
        computerScore.textContent = cp;
        let child = container1.lastElementChild;
        while(child){
            container1.removeChild(child);
            child = container1.lastElementChild;
        }
    }
}

function five(){
    if(pp==5 || cp==5){
        if(pp>cp){
            count = 0;
            zero();
            const show = document.createElement('div');
            show.textContent = `"CONGRATS, YOU WON THE GAME"`;
            container1.appendChild(show);
            container1.appendChild(again);
        }
        else{
            count = 0;
            zero();
            const show = document.createElement('div');
            show.textContent = `"YOU LOST, BETTER LUCK NEXT TIME"`;
            container1.appendChild(show);
            container1.appendChild(again);
        }
        pp=0;
        cp=0;
    }
}

const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () =>{
    const playerSelection = "rock";
    playRound(playerSelection);
});
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () =>{
    const playerSelection = "paper";    
    playRound(playerSelection);
});
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () =>{
    const playerSelection = "scissors";
    playRound(playerSelection);
});

again.addEventListener('click', ()=> location.reload());
