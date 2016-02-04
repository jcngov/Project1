

// // Data Model:
var matches;
var winner;
var time;

var Tile = function(number, image) {
  this.number = number;
  this.image = "assets/" + image + ".jpg";
}

var tile1 = new Tile(0, 'ironman');
var tile2 = new Tile(0, 'ironman');
var tile3 = new Tile(1, 'superman');
var tile4 = new Tile(1, 'superman');
var tile5 = new Tile(2, 'hulk');
var tile6 = new Tile(2, 'hulk');
var tile7 = new Tile(3, 'daredevil');
var tile8 = new Tile(3, 'daredevil');
var tile9 = new Tile(4, 'stormtrooper');
var tile10 = new Tile(4, 'stormtrooper');
var tile11 = new Tile(5, 'deadpool');
var tile12 = new Tile(5, 'deadpool');
var tile13 = new Tile(6, 'batman');
var tile14 = new Tile(6, 'batman');
var tile15 = new Tile(7, 'spiderman');
var tile16 = new Tile(7, 'spiderman');
var tile17 = new Tile(8, 'R2D2');
var tile18 = new Tile(8, 'R2D2');
var tile19 = new Tile(9, 'bobafet');
var tile20 = new Tile(9, 'bobafet');

var tiles = [
            tile1, tile2, tile3, tile4,
            tile5, tile6, tile7, tile8,
            tile9, tile10, tile11, tile12,
            tile13, tile14, tile15, tile16,
            tile17, tile18, tile19, tile20
            ];

var previousTile = null;

// Shuffle Tiles:

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
  // renderBoard(array);
  return array;
}

// Clear board:

function clearBoard() {
  shuffle(tiles);
  console.log(tiles);
  matches = 0;
  time = 0;
  $('.cell').text("");
}


var firstValue;
var firstCard;
var secondClick = false;
var secondCard;
// when click on a tile, a value shows up
$('.cell').on('click', function(evt) {
  var cell    = evt.currentTarget,
      cellIdx = parseInt(cell.id.slice(-2)) - 1;

  // no double-clicking!
  if (previousTile === cellIdx && secondClick === true) {
    return; // do nothing, return nothing... ignore the cick!
  } else {
    previousTile = null;
  }

  $(cell).html('<img src="' + tiles[cellIdx].image + '" />');

  if (secondClick === false) {
    firstValue = tiles[cellIdx].image;
    // this is referring to the actual div being click on
    firstCard = cell;
    console.log('first click');
    console.log(firstValue);
    console.log(firstCard);
    secondClick = true;
    previousTile = cellIdx
    // if you are on your second click, then that card you clicked on is equal to secondElem
  } else if (secondClick === true) {

    secondCard = cell;
    console.log('second click');
    console.log(secondCard);
    // if your first clicked value equals second clicked value, then you've made a match.
    if (firstValue === tiles[cellIdx].image) {
      matches += 1;
      console.log(matches);
      console.log(firstValue);
    } else {
      console.log('not matched');
      console.log(matches);
      // set timer to remove text from cards
      setTimeout(function() {
        $(firstCard).text('');
        $(secondCard).text('');
      }, 700);
    }
    secondClick = false;
  }

  if (matches === 10) {
    console.log('YOU FINISHED');
  }
});

var whoWon = [];

function player1(){
  $('.p1button').on("click", function(){
    console.log('player1 turn');
    clearBoard();
    var time = 0;
      var timer = setInterval(function() {
        if (matches < 10) {
              time += 1;
              $('#clock1').text(time);
        } else if (matches >= 10) {
          clearInterval(timer);
          whoWon.push(time);
          $('#result1').text("Player 1 finished in" + " " + time + " " + "seconds!");
        }
      }, 1000);
  $('.pause').on("click", function(){
    clearInterval(timer);
  })
  });
}

player1();

function player2(){
  $('.p2button').on("click", function(){
    console.log('player2 turn');
    clearBoard();
    var time = 0;
      var timer = setInterval(function() {
        if (matches < 10) {
          time += 1;
          $('#clock2').text(time);
        } else if (matches >= 10) {
          clearInterval(timer);
          $('#result2').text("Player 2 finished in" + " " + time + " " + "seconds!");
          whoWon.push(time);
            if(whoWon[0] < whoWon[1]) {
              $('.winner').text('Player 1 Wins!');
            } else if (whoWon[0] > whoWon[1]) {
              $('.winner').text('Player 2 Wins!');
            } else $('.winner').text("It's a tie!");
        }
      }, 1000);
  $('.pause').on("click", function(){
    clearInterval(timer);
  })
  });
}

player2();

function getWinner(){
  if($('#clock1').text(time) < $('#clock2').text(time)) {
    console.log('winner is p1');
  } else if ($('#clock1').text(time) > $('#clock2').text(time)) {
    console.log('winner is p2');
  }
}

var gamePaused;

function pause(){
  $('.pause').on("click", function(){
    clearInterval(timer);
    gamePaused = true;
  })
}

function resumeGame() {

}

function playAgain(){
  $('.playagain').on("click", function(){
    clearBoard();
    $('#clock1').text("Time");
    $('#clock2').text("Time");
    $('#result1').text("");
    $('#result2').text("");
    $('.winner').text("Winner");
  });
}

playAgain();

      // // if you are on your second click, then that card you clicked on is equal to secondElem
      //   if (secondClick === true) {
      //     secondCard = this;
      //     console.log('second click');
      //     console.log(secondCard);
      // // if your first clicked value equals second clicked value, then you've made a match.
      //     if (firstValue === tiles[i].image) {
      //       matches += 1;
      //       console.log(matches);
      //       console.log(firstValue);
      //     } else {
      //       console.log('not matched');
      //       console.log(matches);
      //      // set timer to remove text from cards
      //       setTimeout(function() {
      //         $(firstCard).text('');
      //         $(secondCard).text('');
      //       }, 700);
      //     }
      //     secondClick = false;
      //   } else {
      //     firstValue = tiles[i].image;
      //     firstCard = this;
      //     console.log('first click');
      //     console.log(firstValue);
      //     secondClick = true;
      //   }

