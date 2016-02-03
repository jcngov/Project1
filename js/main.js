// console.log("START");

// // Data Model:

var Tile = function(number, image) {
  this.number = number;
  this.image = "assets/" + image + ".jpg";
}

var matches;

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
  // renderBoard(array);
  return array;
}

function clearBoard() {
  shuffle(tiles);
  console.log(tiles);
  matches = 0;
  var time = 0;
  $('.cell').text("");
  $('#clock').text("");
  $('#result').text("");
}


// when click on a tile, a value shows up
var firstValue;
var firstElem;
var secondClick = false;
var secondElem;
  $('.cell').each(function(i) {
    $(this).on('click', function(){
      // $(this).text(tiles[i].number);
        $(this).html('<img src="' + tiles[i].image + '" />');
      if (secondClick) {
        secondElem = this;
        if (firstValue === tiles[i].image) {
          console.log('matcheddddd');
          matches += 1;
          console.log(matches);
          // it's a match do something with the cards
          // $(firstElem).css('visibility', 'hidden');
          // $(secondElem).css('visibility', 'hidden');
        } else {
          console.log('not matched');
          console.log(matches);
          // set timer to remove text from cards
          setTimeout(function() {
            $(firstElem).text('');
            $(secondElem).text('');
          }, 700);
        }
        secondClick = false;
      } else {
        secondClick = true;
        firstValue = tiles[i].image;
        firstElem = this;
        console.log('first click');
      }

      if (matches === 10) {
        console.log('YOU FINISHED');
      };
    });
  });


function player1(){
  $('.player1').on("click", function(){
    console.log('player1 turn');
    clearBoard();
    var time = 0;
  var timer = setInterval(function() {
    if (matches < 10) {
          time += 1;
          $('#clock1').text(time);
     } else if (matches >= 10) {
      clearInterval(timer);
      $('#result1').text("You finished in" + " " + time + " " + "seconds!");
    }
      }, 1000);
  });
}

player1();

function player2(){
  $('.player2').on("click", function(){
    console.log('player2 turn');
    clearBoard();
    var time = 0;
      var timer = setInterval(function() {
    if (matches < 10) {
          time += 1;
          $('#clock2').text(time);
     } else if (matches >= 10) {
      clearInterval(timer);
      $('#result2').text("You finished in" + " " + time + " " + "seconds!");
    }
      }, 1000);
  })
}

player2();
// function restart(){
//   $('.reset').on("click", function(){
//     console.log('restarted!');
//     startGame();
//   });
// }

// function pause(){
//   $('.pause').on("click", function(){
//     console.log('paused');
//     clearInterval(timer);
//   });
// }


// function render() {
//   for (var i = 1; i <= tiles.length; i += 1) {
//     // if (tiles[i-1].match === true) {
//       $('#cell' + i).text(tiles[i-1].number);
//     // }
//   }
// }


// function matched(cellValue){
//   if (pairs.length === 0) {
//     pairs.push(cellValue);
//   } else if (pairs.length === 1) {
//     pairs.push(cellValue);
//       if (pairs[0] === pairs[1]) {
//         matches += 1;
//         console.log(matches);
//         pairs = [];
//       }
//     else {
//         console.log('not match');
//       //   function flipBack(tile) {
//       //     tile.hide();
//       //   }
//       // setTimeout(flipBack, 1000);
//       pairs = [];
//       }
//     }
//   if (matches === 10) {
//     console.log("YOU FINISHED");
//   }
// }
