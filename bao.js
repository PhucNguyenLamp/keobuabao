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
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
    function handleButtonClick(e) {
        const clickedButton = e.target;
        const playerSelection = clickedButton.textContent;
        const computerSelection = getComputerChoice();
        const result = play(playerSelection,computerSelection);
        if (result === 'win'){
            player ++;
        }
        else if (result === 'lose'){
            computer++
        } 
        const div = document.querySelector('div');
        div.textContent = 'player: ' + player + ', ' + 'computer: ' + computer;
        if (player === 5 || computer === 5){
            if (player === 5) div.innerHTML += '<br>You Win';
            else div.innerHTML += '<br>You Lose';
            buttons.forEach(button => {
                button.disabled = true;
            });
            const body = document.querySelector('body');
            const restart = document.createElement('button');
            body.appendChild(restart);
            restart.textContent = 'restart';
            restart.addEventListener('click', () => {
                location.reload();
            })
        }
    }
}

game();