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
            return "It's a draw";
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

let game = () => {
    let computerWins = 0;
    let userWins = 0;
    let draws = 0;
    for (let i = 0 ; i < 5; i++){
        let userChoise = prompt("Paper, rock or scisors","PAPER");
        let computerChoise = computerPlay();
        let result = playRound(userChoise,computerChoise);
        if (result === "It's a draw")
        {
            draws += 1;
        }
        else if( result === "Computer win!!")
        {
            computerWins += 1;
        }
        else
        {
            userWins += 1;
        }
        console.log(result + `\nComputer points: ${computerWins}\nUser wins: ${userWins}\nDraws: ${draws}`);
    }
    if(computerWins === userWins)
    {
        return "It was a good battle but was a draw :(";
    }
    else if(computerWins > userWins)
    {
        return "COMPUTER IS THE FINAL WINEEEER!!";
    }
    else
    {
        return "USER IS THE FINAL WINER!!";
    }
}
console.log(game());



// console.log(playRound("PAPER",computerPlay()));