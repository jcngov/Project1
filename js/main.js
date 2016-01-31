console.log("START");

// Data Model:

var tiles = [0, 1, 2, 3,
            4, 5, 6, 7,
            8, 9, 0, 1,
            2, 3, 4, 5,
            6, 7, 8, 9
            ];
var matches = 0;
var time;
var player;
var win = false;

// 1. Start Game:

function shuffleArray(tiles) {
  var tiles = [0, 1, 2, 3,
               4, 5, 6, 7,
               8, 9, 0, 1,
               2, 3, 4, 5,
               6, 7, 8, 9
              ];
    for (var i = tiles.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = tiles[i];
        tiles[i] = tiles[j];
        tiles[j] = temp;
    }
    return tiles;
}

function startGame() {
  win = false;
  player1 = "Player 1";
  var matches = 0;
  return shuffleArray(tiles);
}

function pickCells(cellOne, cellTwo) {
  var newBoard = shuffleArray(tiles);
  var pick1 = tiles[cellOne];
  var pick2 = tiles[cellTwo];
   if (pick1 === pick2) {
     matches += 1;
     console.log('cool');
     complete();
   }
  else {
     console.log('try again');
   }
}

function complete() {
  if (matches === 10) {
    console.log('completed');
  }
}


// $('#cell').on("click", function(event) {
//   $('#cell').css({"background-color": "red"});
// });

// $('#cell1').on("click", function(event) {
//   $('#cell1').css({"background-color": "red"});
// });

