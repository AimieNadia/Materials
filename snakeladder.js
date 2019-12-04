width= 10;
height= 10;

var hasWin = false;
window.diceRoll= () => {
  if (hasWin) {
    return;
  }
}

var roll = getRandom(1,6);
var result = var roll();

let currentPlayer = players[currentPlayerTurn];

roll = Math.floor(Math.random() * * (1 + top - bottom)) + bottom);
console.log(currentPlayer.name +", Your turn", roll);
if(currentPlayer.position === 0 && roll != 1){
  currentPlayer.position = 0;}
  else{
     currentPlayer.position += roll;
     ladders.forEach(ladder => {
     if (ladder.start === currentPlayer.position) {
     console.log("Congrates!");
     currentPlayer.position = ladder.end;
   }
 });

 drawboard();

 players = [{name: "Player1",
             position: 0,
             color:"green"},
            {name: "Player2",
             position: 0,
             color:"blue"}];
let currentPlayerTurn = 0;

boardSize = 55;
drawBoard = () => {
  let boardOnScreen = ``;
  board.forEach(row => {
    row.forEach(square => {
      boardOnScreen += `<div class=square style="top:${square.y *
        boardSize}px; left:${square.x</div>`;
    });
  });

  snakes.forEach(snake => {
      //let start = 0;
      let startPos = { x: 0, y: 0 };
      let endPos = { x: 0, y: 0 };
  ladders.forEach(ladder => {
      //let start = 0;
      let startPos = { x: 1, y: 1 };
      let endPos = { x: 1, y: 1 };

      board.forEach(row => {
           row.forEach(square => {
             if (square.position === ladder.start) {
               startPos.x = square.x * boardSize;
               startPos.y = square.y * boardSize;
             }

             if (square.position === ladder.end) {
               endPos.x = square.x * boardSize;
               endPos.y = square.y * boardSize;
             }
           });
         });

         isLadder = ladder.end > ladder.start;

function getRandom(bottom,top) {
  return function() {
    return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
  }
}
