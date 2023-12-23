let pp = 0;
let cp = 0;
let i = 1;

function getPlayerChoice(){
    return prompt("Your Choice: ");
}

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

function game(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log("Round "+i+":",playRound(playerSelection,computerSelection));
    console.log("Player Score:",pp,"Computer Score:",cp);
}

function playRound(playerSelection,computerSelection){
    const r = 'Rock beats Scissors"';
    const p = 'Paper beats Rock"';
    const s = 'Scissors beats Paper"';
    const w = '"You Win! ';
    const l = '"You Lose! ';
    const t = "Tie!"
    const ps = playerSelection.toLowerCase();
    const cs = computerSelection.toLowerCase();
    if(cs===ps){
        console.log("It's a Tie! Round",i,"is Re-played");
        return playRound(getPlayerChoice(),getComputerChoice());
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
        default:
            alert("Invalid Choice. It's Rock-Paper-Scissors!");
            return playRound(getPlayerChoice(),computerSelection);
    }
}

for(i;i<6;i++)
    game();

if(pp==cp)
    console.log("Tie!");
    else if(pp>cp)
    console.log("Congrats! You Won!");
    else
    console.log("You Lost! Better luck next time.");