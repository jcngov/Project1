// console.log("START");

// // Data Model:

//nested
// var tiles = [ // new Tile(0,"www.friendship.com/friends1.jpg")
//             0, 1, 2, 3,
//             4, 5, 6, 7,
//             8, 9, 0, 1,
//             2, 3, 4, 5,
//             6, 7, 8, 9
//             ];
var Tile = function(number, color) {
  this.number = number;
  this.color = color;
  this.match = false;
  // this.urlString = urlString;
}

var tile1 = new Tile(0, "blue");
var tile2 = new Tile(0, "blue");
var tile3 = new Tile(1, "red");
var tile4 = new Tile(1, "red");
var tile5 = new Tile(2, "yellow");
var tile6 = new Tile(2, "yellow");
var tile7 = new Tile(3, "orange");
var tile8 = new Tile(3, "orange");
var tile9 = new Tile(4, "purple");
var tile10 = new Tile(4, "purple");
var tile11 = new Tile(5, "brown");
var tile12 = new Tile(5, "brown");
var tile13 = new Tile(6, "pink");
var tile14 = new Tile(6, "pink");
var tile15 = new Tile(7, "black");
var tile16 = new Tile(7, "black");
var tile17 = new Tile(8, "gray");
var tile18 = new Tile(8, "gray");
var tile19 = new Tile(9, "green");
var tile20 = new Tile(9, "green");

var tiles = [
            tile1, tile2, tile3, tile4,
            tile5, tile6, tile7, tile8,
            tile9, tile10, tile11, tile12,
            tile13, tile14, tile15, tile16,
            tile17, tile18, tile19, tile20
            ];

var currentTurn = {
  clickOne: null,
  clickTwo: null
}

var pairMatch = [];
var matches = 0;
var time;
var player;
var win = false;

// 1. Start Game:

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function startGame() {
  shuffle(tiles);
  console.log(tiles);
  win = false;
  player1 = "Player 1";
  var matches = 0;
}


var selected = null;

// for each div, assign a tile
// when click on tile, value appears.
// function flipTiles() {

//   // for (var i = 0; i < tiles.length; i += 1) {
//     $('.cell').each(function(i) {
//       $(this).on('click', function(){
//         $(this).html(tiles[i]);
//       });
//     });
  // }

  // if (board[currI) === selected
  // if ($('#cell1').text() === $('#cell2').text() ||
  //                          $('#cell3').html ||
  //                          $('#cell4').html ||
  //                          $('#cell5').html ||
  //                          $('#cell6').html ||
  //                          $('#cell7').html ||
  //                          $('#cell8').html ||
  //                          $('#cell9').html ||
  //                          $('#cell10').html ||
  //                          $('#cell11').html ||
  //                          $('#cell12').html ||
  //                          $('#cell14').html ||
  //                          $('#cell15').html ||
  //                          $('#cell16').html ||
  //                          $('#cell17').html ||
  //                          $('#cell18').html ||
  //                          $('#cell19').html ||
  //                          $('#cell20').html) {
  //   console.log('match');
  // }

// after I click a div to reveal the value,
// I want to click another div.  If the 2 values match, match+1
// function matchingPairs() {
//   if (pairMatch.length < 2) {
//     pairMatch.push($('.cell').html);
//   }
//   if (pairMatch[0] === pairMatch[1]) {
//     matches += 1;
//     console.log(pairMatch);
//     pairMatch = [];
//   }
// }

// function complete() {
//   if (matches === 10) {
//     console.log('completed');
//     win = true;
//   }
// }

function render() {
  for (var i = 1; i <= tiles.length; i += 1) {
    // if (tiles[i-1].match === true) {
      $('#cell' + i).text(tiles[i-1].number);
    // }
  }
}


