// get player pick while loop - section
let player;
while (true) {
    player = prompt("Choose: Rock, Paper, Scissor",);
    player = player?.toLowerCase();
    if (!player) {
        continue;
    } else {
        if (player === "rock" || player === "paper" || player === "scissor") {
            break;
        }
    }
}


// get computer pick function - section
function computerPickFunc() {
    // generate a random number between 1 - 90
    const randomNum = Math.floor(Math.random() * 90) + 1;
    if (randomNum >= 1 && randomNum <= 30) {
        return "rock";
    } else if (randomNum >= 31 && randomNum <= 60) {
        return "paper";
    } else if (randomNum >= 61 && randomNum <= 90) {
        return "scissor";
    }
}
let computer = computerPickFunc();


// decide winner function - section
function decideWinner() {
    if (player === computer) {
        alert(`You: ${player} | Computer: ${computer} ----- It's a Tie!`);
    } else if (
        (player === "rock" && computer === "scissor") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper")
    ) {
        alert(`You: ${player} | Computer: ${computer} ----- You Won!`);
    } else {
        alert(`You: ${player} | Computer: ${computer} ----- You lose!`);
    }
}
decideWinner();