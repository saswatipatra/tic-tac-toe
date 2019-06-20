// userinterface logic...

$(document).ready(function() {
  $("#getPlayerName").submit(function(event) {
    event.preventDefault();
    debugger;
    var player1Name = $("input#player1").val();
    var player2Name = $("input#player2").val();
    $("input#player1").val("");
    $("input#player2").val("");
    var player1 = new Player(player1Name);
    var player2 = new Player(player2Name);
    cells= document.querySelectorAll(".cell");
    startGame();

  })
})

// Business Logic..
var emptyBoard, cells;
var player1Sign='X';
var player2Sign='O';
function Player(name, active){
  this.name= name;
  this.active=active;
}


var winComb= [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [2,5,8], [0,3,6], [1,4,7], [2,5,8]]

function startGame(){
  document.querySelector(".endGame").style.display="none";
  emptyBoard=Array.from(Array(9).keys());
  for(var i=0; i<cells.length; i++){
    cells[i].innerText='';
    cells[i].style.removeProperty("background-color");
    cells[i]=addEventListener('click',turnClick, false);
  }
}

function turnClick(box){
  var boxId= box.target.id;
  if (typeof boxId==='number'){
    if (this.active===player1.active){
      emptyBoard[boxId]=player1Sign;
      document.getElementById(boxId).innerText=player1Sign;
      var gameWon=checkWin(emptyBoard,player1Sign);
      if(gameWon){
        gameOver(gameWon);
      }else if (!checkTie()) {
        player1.active=false;
        player2.active=true;
      }else{
      checkTie();
      }
    }else {
      emptyBoard[boxId]=player2Sign;
      document.getElementById(boxId).innerText=player2Sign;
      gameWon=checkWin(emptyBoard,player2Sign);
      if(gameWon){
        gameOver(gameWon);
      }else if(!checkTie()){
      player1.active=true;
      player2.active=false;
    }else {
      checkTie();
      }
    }
  }
}
function checkWin(board,playersign){
  var gameWon = null;
  var plays= board.reduce((acc,cur,idx)=> (cur===playersign) ? acc.concat(idx) : acc, []);

  for (let [index, win] of winComb.entries()){
    if (win.every(elem=> plays.indexOf(elem > -1))){
      gameWon={ index: index, player: playersign};
      break;
    }
  }
  return gameWon;
}

function gameOver(gameWon){
  for(let index of winComb[gameWon.index]){
    document.getElementById(index).style.backgroundColor= gameWon.playersign === player1player1Sign ? "yellow" : "bule";
  }
  for(var i=0; i<cells.length; i++){
    cells[i].removeEventListener("click",turnClick,false);
  }
  declareWinner(gameWon.playersign === player1Sign ? (player1.name + "you win!") : (player2.name + "you Win!"));
}

function declareWinner(who) {
	document.querySelector(".endgame").style.display = "block";
	document.querySelector(".endgame .result").innerText = who;
}
