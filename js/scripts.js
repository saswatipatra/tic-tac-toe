// userinterface logic...

$(document).ready(function() {
  $("#getPlayerName").submit(function(event) {
    event.preventDefault();
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
var player1Sign, player2sign, emptyBoard, cells;
function Player(name, active){
  this.name= name;
  this.active=active;
}

Player.prototype.asign= function(){
  if (this.active=== player1.active){
    player1Sign='X';
  }else {
    player2sign='O'
  }
}
var winComb= [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [2,5,8], [0,3,6], [1,4,7], [2,5,8]]
function startGame(){
  document.querySelector(".endGame").style.display="none";
  emptyBoard=Array.from(Array(9).keys());
  for(var i=0; i<cells.length; i++){
    cells[i].innerText='';
    cells[i].style.removeProperty("background-color");
    cells[i]=addEventListener("click",turnClick, false);
  }
}

function turnClick(box){
  console.log(box.target.id)
}
