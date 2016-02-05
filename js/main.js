console.log("main.js loaded!");

// Global Variables

var matches;
var time;
var firstTileClicked = null;
var firstImage;
var firstCard;
var secondClick = false;
var secondCard;
var whoWon = [];

// Constructor Function used for each tile
var Tile = function(number, image) {
  this.number = number;
  this.image = "assets/" + image + ".jpg";
};

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
var tile19 = new Tile(9, 'captainamerica');
var tile20 = new Tile(9, 'captainamerica');

var tiles = [
            tile1, tile2, tile3, tile4,
            tile5, tile6, tile7, tile8,
            tile9, tile10, tile11, tile12,
            tile13, tile14, tile15, tile16,
            tile17, tile18, tile19, tile20
            ];

// Shuffle Tiles:

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While board needs to be shuffled
  while (currentIndex !== 0) {

    // Pick an element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap with current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

  }
  return array;
}

// Clear board:

function clearBoard() {
  shuffle(tiles);
  matches = 0;
  time = 0;
  $('.cell').text("");
}

// Assign click event for each tile

$('.cell').on('click', function(evt) {
// Identifies the current target for the event, as the event traverses the DOM.
// It always refers to the element the event handler has been attached to as
// opposed to event.target which identifies the element on which the event occurred.
  var cell = event.currentTarget;
  var cellIdx = parseInt(cell.id.slice(-2)) - 1;
  console.log(cell);
  console.log(cellIdx);

  // When you click on a cell, image appears
  $(cell).html('<img src="' + tiles[cellIdx].image + '" />');

  // No double-clicking!
  if (firstTileClicked === cellIdx && secondClick === true) {
    return; // do nothing, return nothing... ignore the cick!
  } else {
    firstTileClicked = null;
  }

  // First click:
  if (secondClick === false) {
    firstImage = tiles[cellIdx].image;
    firstCard = cell;
    console.log(firstImage);
    console.log(firstCard);
    secondClick = true;
    firstTileClicked = cellIdx;


  // Second click: second card is just the target, firstImage has to match the image of that target
  } else if (secondClick === true) {
    secondCard = cell;
    // if first image is equal to the image of the secondCard(target) then its a match!
    if (firstImage === tiles[cellIdx].image) {
      matches += 1;
    } else {
      // set timer to remove image from card
      setTimeout(function() {
        $(firstCard).text('');
        $(secondCard).text('');
      }, 700);
    }
    secondClick = false;
  }
});

$('.hurry').hide();
$('.doneyet').hide();
$('.anydaynow').hide();
$('.practice').hide();

function player1(){
  $('.p1button').on("click", function(){
    clearBoard();
    time = 0;
    var timer = setInterval(function() {
      if (matches < 10) {
        time += 1;
        $('#clock1').text(time);
        if (time === 10) {
          $('.hurry').fadeIn(2500);
          $('.hurry').fadeOut(1500);
        } else if (time === 25) {
          $('.doneyet').fadeIn(2500);
          $('.doneyet').fadeOut(1500);
        } else if (time === 40) {
          $('.anydaynow').fadeIn(2500);
          $('.anydaynow').fadeOut(1500);
        } else if (time === 55) {
          $('.practice').fadeIn(2500);
          $('.practice').fadeOut(1500);
        }
      } else {
        clearInterval(timer);
        whoWon.push(time);
        $('#result1').text("Player 1 finished in" + " " + time + " " + "seconds!");
      }
    }, 1000);
  });
}

player1();

function player2(){
  $('.p2button').on("click", function(){
    clearBoard();
    time = 0;
    var timer = setInterval(function() {
      if (matches < 10) {
        time += 1;
        $('#clock2').text(time);
        if (time === 10) {
          $('.hurry').fadeIn(2500);
          $('.hurry').fadeOut(1500);
        } else if (time === 25) {
          $('.doneyet').fadeIn(2500);
          $('.doneyet').fadeOut(1500);
        } else if (time === 40) {
          $('.anydaynow').fadeIn(2500);
          $('.anydaynow').fadeOut(1500);
        } else if (time === 55) {
          $('.practice').fadeIn(2500);
          $('.practice').fadeOut(1500);
        }
      } else {
        clearInterval(timer);
        $('#result2').text("Player 2 finished in" + " " + time + " " + "seconds!");
        whoWon.push(time);
        if (whoWon[0] < whoWon[1]) {
          $('.winner').text('Player 1 Wins!');
        } else if (whoWon[0] > whoWon[1]) {
          $('.winner').text('Player 2 Wins!');
        } else $('.winner').text("It's a tie!");
      }
    }, 1000);
  });
}

player2();

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



