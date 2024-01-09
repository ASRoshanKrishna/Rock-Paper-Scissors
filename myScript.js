let pp = 0;
let cp = 0;
let i = 1;

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
    console.log(ps);
    console.log(cs);
    if(cs===ps){
        console.log("It's a Tie!");
    }
    else{
        switch(ps){
            case "rock":
                if(cs=="paper"){
                    cp++;
                    console.log(l+p);
                    break;
                }
                else{
                    pp++;
                    console.log(w+r);
                    break;
                }
            case "paper":
                if(cs=="scissors"){
                    cp++;
                    console.log(l+s);
                    break;
                }
                else{
                    pp++;
                    console.log(w+p);
                    break;
                }
            case "scissors":
                if(cs=="rock"){
                    cp++;
                    console.log(l+r);
                    break;
                }
                else{
                    pp++;
                    console.log(w+s);
                    break;
                }
        }
    }
}

/*if(pp==cp)
    console.log("Tie!");
    else if(pp>cp)
    console.log("Congrats! You Won!");
    else
    console.log("You Lost! Better luck next time.");*/

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