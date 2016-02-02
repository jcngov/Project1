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
var pairs = [];
var matches = 0;
var Tile = function(number, url) {
  this.number = number;
  this.url = url;
  this.clickOne = false;
  this.clickTwo = false;
}

var tile1 = new Tile(0);
var tile2 = new Tile(0);
var tile3 = new Tile(1);
var tile4 = new Tile(1);
var tile5 = new Tile(2);
var tile6 = new Tile(2);
var tile7 = new Tile(3);
var tile8 = new Tile(3);
var tile9 = new Tile(4);
var tile10 = new Tile(4);
var tile11 = new Tile(5);
var tile12 = new Tile(5);
var tile13 = new Tile(6);
var tile14 = new Tile(6);
var tile15 = new Tile(7);
var tile16 = new Tile(7);
var tile17 = new Tile(8);
var tile18 = new Tile(8);
var tile19 = new Tile(9);
var tile20 = new Tile(9);

var tiles = [
            tile1, tile2, tile3, tile4,
            tile5, tile6, tile7, tile8,
            tile9, tile10, tile11, tile12,
            tile13, tile14, tile15, tile16,
            tile17, tile18, tile19, tile20
            ];

// var pairMatch = [];
// var matches = 0;
// var time;
// var player;
// var win = false;

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
  // win = false;
  // player1 = "Player 1";
  var matches = 0;
}


// when click on a tile, a value shows up
  $('.cell').each(function(i) {
    $(this).on('click', function(){
      $(this).text(tiles[i].number);
        flip(tiles[i].number);
          // flipBack();
    });
  });


function flip(cellValue){
  if (pairs.length === 0) {
    pairs.push(cellValue);
  } else if (pairs.length === 1) {
    pairs.push(cellValue);
      if (pairs[0] === pairs[1]) {
        matches += 1;
        console.log(matches);
        pairs = [];
      }
      else {
        console.log('not match');
        pairs = [];
          function flipBack() {

          }
      }
    }
  if (matches === 10) {
    console.log("YOU FINISHED");
  }
}



function click1(firstpick){
  for (var i = 1; i <= tiles.length; i += 1) {

  }
}



function render() {
  for (var i = 1; i <= tiles.length; i += 1) {
    // if (tiles[i-1].match === true) {
      $('#cell' + i).text(tiles[i-1].number);
    // }
  }
}

// var selected = true;

  // if (board[currI) === selected)
function match() {
  if (tile1.number === tile2.number ||
      tile1.number === tile3.number ||
      tile1.number === tile4.number ||
      tile1.number === tile5.number ||
      tile1.number === tile6.number ||
      tile1.number === tile7.number ||
      tile1.number === tile8.number ||
      tile1.number === tile9.number ||
      tile1.number === tile10.number ||
      tile1.number === tile11.number ||
      tile1.number === tile12.number ||
      tile1.number === tile13.number ||
      tile1.number === tile14.number ||
      tile1.number === tile15.number ||
      tile1.number === tile16.number ||
      tile1.number === tile17.number ||
      tile1.number === tile18.number ||
      tile1.number === tile19.number ||
      tile1.number === tile20.number) {
    console.log('match');
  }
}

