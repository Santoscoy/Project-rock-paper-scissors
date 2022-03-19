console.log("Hola, Victor");


let computerPlay = () => {
    let options = ["paper","rock","scisors"]
    let x = Math.round(Math.random()* 2)
    // let x = 1;
    result = options[x];
    return result;
}

let playRound = (playerSelection,computerSelection) => {  
    let result;
    let strPlayerSelection = playerSelection.toLowerCase(); 
    if (strPlayerSelection === "paper" || strPlayerSelection === "rock" || strPlayerSelection === "scisors"){
        console.log(`Computer chose: ${computerSelection}\nUser chose: ${strPlayerSelection}\n`);
        if (strPlayerSelection === computerSelection){
            return "It's a Draw";
        }
        else if(computerSelection === "paper"){
            result = strPlayerSelection === "scisors" ? "User win!!" : "Computer win!!";
            return result;
        }
        else if(computerSelection === "rock"){
            result = strPlayerSelection === "scisors" ? "Computer win!!" : "User win!!";
            return result;
        }
        else if(computerSelection === "scisors"){
            result = strPlayerSelection === "paper" ? "Computer win!!" : "User win!!";
            return result;
        }
    }
    else {
        return "invalid input";
    }
}
console.log(playRound("PAPER",computerPlay()));