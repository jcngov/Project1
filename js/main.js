console.log("START");

// Data Model:
var back = [];
var tiles = [0, 1, 2, 3,
            4, 5, 6, 7,
            8, 9, 0, 1,
            2, 3, 4, 5,
            6, 7, 8, 9
            ];
var flipped = 0;
var time;
var player1 = "Player 1";
var player2 = "Player 2";
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
  var back = [];
  var flipped = 0;
  return shuffleArray(tiles);
}


function flipTiles(cell) {
  for (var i = 0; i < tiles.length; i += 1) {
    back.push(tiles[cell]);
  }
}




