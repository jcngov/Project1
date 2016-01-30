console.log("START");

// Data Model:

var back = ["", "", "", "",
             "", "", "", "",
             "", "", "", "",
             "", "", "", "",
             "", "", "", ""
            ];

// var front = ["1", "2", "3", "4",
//              "5", "6", "7", "8",
//              "9", "10", "1", "2",
//              "3", "4", "5", "6",
//              "7", "8", "9", "10"
//             ];

var time;
var player1 = "Player 1";
var player2 = "Player 2";
var win = false;

// 1. Start Game:

function startGame() {
  win = false;
  player1 = "Player 1";
  var back = ["", "", "", "",
             "", "", "", "",
             "", "", "", "",
             "", "", "", "",
             "", "", "", ""
            ];

}

// function flipTiles(cell1, cell2) {
//   // for (var i = 0; i < board.length; i += 1) {
//   //   for (var j = 0; j < flippedBoard.length; j += 1) {
//   //     // if (board[cell1]) {
//   //        board[cell1].push(flippedBoard[j]);
//   //        // if (cell2 === board[i]) {
//          //    cell2.push(flippedBoard[j]);
//          // }
//       // }
//     }
//   }
// }

function flipTiles() {
    back[0] = 0;
    back[1] = 1;
    back[2] = 2;
    back[3] = 3;
    back[4] = 4;
    back[5] = 5;
    back[6] = 6;
    back[7] = 7;
    back[8] = 8;
    back[9] = 9;
    back[10] = 0;
    back[11] = 1;
    back[12] = 2;
    back[13] = 3;
    back[14] = 4;
    back[15] = 5;
    back[16] = 6;
    back[17] = 7;
    back[18] = 8;
    back[19] = 9;
}

// function flipTiles() {
//   var $cell1 = ('.cell1');
//   $cell1.on('click', function(event){

//   })
