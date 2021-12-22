
const choices = ['rock', 'paper', 'scissors'];
const rand = () => {
    return Math.floor(Math.random() * 3)
}

const rockPaperScissors = () =>{
    return new Promise((resolve, reject) => {//new Promise takes in functions are parameters. The first function in the parameter is what will be caught
        setTimeout(() => {
            const r = rand()// 0, 1, 2
            const choice = choices[r]
            //choose rock, paper, scissors randomly
            resolve(choice)//resolve is a function
        }, 2000)
    })
}

const playGame = async (turn) =>{
    //wait for AI to play a turn
    let computerTurn =  await rockPaperScissors();
    compareTurns(computerTurn, turn)
    // rockPaperScissors().then(aiTurn => {
    //     computerTurn = aiTurn;
    //     computerTurns(compareTurns, turn)
    // })
    //compare our turn with AI
    //logs results
}

rockPaperScissors().then(result => console.log(result))
    .then((result) => console.log(result))
    .catch((err) => console.log)("something went wrong!", err)


function compareTurns(aiTurn, turn){
    aiTurn => {
        if(turn === aiTurn) return console.log("IT'S A TIE!")
        if(turn === 'rock' && aiTurn === 'paper'){
            console.log("AI WINS. PAPER BEATS ROCK")
        }
        if(turn === 'rock' && aiTurn === 'scissors'){
            console.log("YOU WIN.")
        }
        if(turn === 'paper' && aiTurn === 'rock'){
            console.log("YOU WIN")
        }
        if(turn === 'paper' && aiTurn === 'scissors'){
            console.log("You LOSE")
        }
        if(turn === 'scissors' && aiTurn === 'paper'){
            console.log("YOU WIN")
        }
        if(turn === 'sciossors' && aiTurn === 'rock'){
            console.log("YOU LOSE")
        }
    }
}

playGame("paper")
