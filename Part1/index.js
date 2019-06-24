

console.log("is connected");

const board = [];       //board
let boardFull = true;  //set initial
let win = false ;      //initialize win to false

function play(clickedId){        //0-8
    const playerSpan = document.getElementById("player");
    const clickedElement = document.getElementById(clickedId);      

    if(playerSpan.innerText==="X"){
        playerSpan.innerText="O";
        clickedElement.innerText = "X"; 
        board[clickedId] = "X";
    }
    else {playerSpan.innerText="X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
    }


/////Check winning
if      (board[0] !== undefined && board[0] === board[1] && board[1] === board[2]) {win=true;
    alert(clickedElement.innerText + " is the winner");}
else if (board[3] !== undefined && board[3] === board[4] && board[4] === board[5]) {win=true;
    alert(clickedElement.innerText + " is the winner");}
else if (board[6] !== undefined && board[6] === board[7] && board[7] === board[8]) {win=true;
    alert(clickedElement.innerText + " is the winner");} 
else if (board[0] !== undefined && board[0] === board[3] && board[3] === board[6]) {win=true;
    alert(clickedElement.innerText + " is the winner");}
else if (board[1] !== undefined && board[1] === board[4] && board[4] === board[7]) {win=true;
    alert(clickedElement.innerText + " is the winner");}
else if (board[2] !== undefined && board[2] === board[5] && board[5] === board[8]) {win=true;
    alert(clickedElement.innerText + " is the winner");}
else if (board[0] !== undefined && board[0] === board[4] && board[4] === board[8]) {win=true;
    alert(clickedElement.innerText + " is the winner");}
else if (board[2] !== undefined && board[2] === board[4] && board[4] === board[6]) {win=true;
    alert(clickedElement.innerText + " is the winner");}
else if(checkIfFull() && !win)
    {alert("Cat Wins!");
    win=true;
    }

if (win===true){
    resetGame();
    }
}

function checkIfFull (){
    for (let i = 0; i < 9; i++) {       //check if any undefined if undefined then empty box
        if (board[i] === undefined) {return false;}
      }
    return true;
};

function resetGame(){
    for (let i = 0; i < 9; i++) {      
        board[i] = undefined;  
        document.getElementById(i).innerText="";
      }  
      win=false;
};
