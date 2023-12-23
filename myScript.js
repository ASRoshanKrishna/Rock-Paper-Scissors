let pp = 0;
let cp = 0;

function getComputerChoice(){
    let c = Math.floor(Math.random() * 3);
    switch(c){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const r = 'Rock beats Scissors"';
    const p = 'Paper beats Rock"';
    const s = 'Scissors beats Paper"';
    const w = '"You Win! ';
    const l = '"You Lose! ';
    const t = "Tie!"
    const ps = playerSelection.toLowerCase();
    const cs = computerSelection.toLowerCase();
    if(cs===ps){
        pp++;
        cp++;
        return t;
    }
    switch(ps){
        case "rock":
            if(cs=="paper"){
                cp++;
                return l+p;
            }
            else{
                pp++;
                return w+r;
            }
        case "paper":
            if(cs=="scissors"){
                cp++;
                return l+s;
            }
            else{
                pp++;
                return w+p;
            }
        case "scissors":
            if(cs=="rock"){
                cp++;
                return l+r;
            }
            else{
                pp++;
                return w+s;
            }
    }
}

function getPlayerChoice(){
    return prompt("Your Choice: ");
}

function game(){
    for(let i = 1;i < 6;i++){
        console.log("Round "+i+":",playRound());
        console.log("Player Score:",pp,"Computer Score:",cp);
    }
}

game();