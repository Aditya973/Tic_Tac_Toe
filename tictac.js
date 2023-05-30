let currentPlayer = 'X';
let gameState = ['','','','','','','','',''];
let winnerDeclared = false;
let winner = document.getElementById('winner');
let btn = document.getElementsByClassName('btn')[0];
const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
]
function changePlayer(){
    currentPlayer = (currentPlayer == 'X')?'O':'X';
}
function checkWinner(){
    for(let i = 0;i<8;i++){
        let a = winCondition[i][0];
        let b = winCondition[i][1];
        let c = winCondition[i][2];
        for(let i = 0;i<9;i++){
            
        }
        if(gameState[a] == currentPlayer && gameState[b] == currentPlayer && gameState[c] == currentPlayer){
            winnerDeclared = true;
            winner.innerHTML = "Winner is "+currentPlayer;
        }
    }
}
function checkTie(){
    if(!gameState.includes('') && winnerDeclared == false){
        winner.innerHTML = "Game is Tie";
    }
}
let block = document.getElementsByTagName('td');
function resetGame(){
    for(let i = 0;i<9;i++){
        gameState[i] = '';
    }
    for(let i = 0;i<9;i++){
        block[i].innerHTML = '';
    }
    winner.innerHTML = 'Game On';
    currentPlayer = 'X';
    winnerDeclared = false;
}
function handleClick(){
    if(!winnerDeclared){
        let td = event.target;
        let index = td.getAttribute('index');
        if(td.innerHTML == ''){
        td.innerHTML = currentPlayer;
        gameState[index] = currentPlayer;
        checkWinner();
        checkTie();
        changePlayer();
        }
    }
    
}

//add event listener in each block
for(let i = 0;i<9;i++){
    block[i].addEventListener('click',handleClick);
}
btn.addEventListener('click',resetGame);