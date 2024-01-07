function getComputerChoice(){
    const choice = Math.floor(3*Math.random());
    switch (choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'ok';
    }
}
function play(playerSelection, computerSelection){
    if (playerSelection === computerSelection) return 'tie';
    if (playerSelection === 'rock' && computerSelection === 'scissors') return 'win';
    if (playerSelection === 'paper' && computerSelection === 'rock') return 'win';
    if (playerSelection === 'scissors' && computerSelection === 'paper') return 'win';
    return 'lose';
}

function game(){
    let player = 0;
    let computer = 0;
    for (let i=0; i<5; i++){
        const playerSelection = prompt('Choose: ');
        const computerSelection = getComputerChoice();
        const result = play(playerSelection, computerSelection);
        if (result === 'win') player++;
        if (result === 'lose') computer++;
        console.log(
            'player: ' + player + '\n'
            + 'computer: ' + computer
        );
    }
    if (player > computer) console.log('You win');
    else if (player < computer) console.log('You lose');
    else console.log('Tie');
}

game();