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

function playRound(playerSelection, computerSelection){
    const r = 'Rock beats Scissors"';
    const p = 'Paper beats Rock"';
    const s = 'Scissors beats Paper"';
    const w = '"You Win! ';
    const l = '"You Lose! ';
    const t = "Tie!"
    const ps = playerSelection.toLowerCase();
    const cs = computerSelection.toLowerCase();
    if(cs===ps)
    return t;
    switch(ps){
        case "rock":
            if(cs=="paper")
            return l+p;
            else
            return w+r;
        case "paper":
            if(cs=="scissors")
            return l+s;
            else
            return w+p;
        case "scissors":
            if(cs=="rock")
            return l+r;
            else
            return w+s;
    }
}

function getPlayerChoice(){
    return prompt("Your Choice: ");
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection, playRound(playerSelection,computerSelection));