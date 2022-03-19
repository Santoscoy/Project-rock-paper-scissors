console.log("Hola, Victor");


let computerPlay = () => {
    let options = ["paper","rock","scisors"]
    // let x = Math.round(Math.random()* 2)
    let x = 1;
    result = options[x];
    return result;
}

let playRound = (playerSelection,computerSelection) => {  
    let strPlayerSelection = playerSelection.toLowerCase(); 
    console.log(`Computer chose: ${computerSelection}\nUser chose: ${strPlayerSelection}\n`);
    if (strPlayerSelection === computerSelection){
        return console.log("It's a Draw");
    }
    
}
playRound("rOcK",computerPlay());