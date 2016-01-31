// console.log("START");

// // Data Model:

var board = ["", "", "", "",
             "", "", "", "",
             "", "", "", "",
             "", "", "", "",
             "", "", "", "",
            ]
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
var newArray;

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
  var board = ["", "", "", "",
               "", "", "", "",
               "", "", "", "",
               "", "", "", "",
               "", "", "", "",
              ]
  var tiles = [0, 1, 2, 3,
               4, 5, 6, 7,
               8, 9, 0, 1,
               2, 3, 4, 5,
               6, 7, 8, 9
              ];
  shuffle(tiles);
  console.log(tiles);
  win = false;
  player1 = "Player 1";
  var matches = 0;
  var tiles;
}

function pickCells(cellOne, cellTwo) {
  var tiles = [0, 1, 2, 3,
            4, 5, 6, 7,
            8, 9, 0, 1,
            2, 3, 4, 5,
            6, 7, 8, 9
            ];
  var newArray = shuffleArray(tiles);
  var pick1 = tiles[cellOne];
  var pick2 = tiles[cellTwo];
   if (pick1 === pick2) {
     matches += 1;
     console.log('cool');
     complete();
   }
   else if (pick1 !== pick2) {
    matches = matches;
    console.log('flip over');
   }
}

function complete() {
  if (matches === 10) {
    console.log('completed');
  }
}



// var $array = [];
// $('.cell').each(function() {
//   var id = $(this).attr('id');
//   $array.push(id);
// });

// function shuffleArray($array) {
//     for (var i = $array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = $array[i];
//         $array[i] = $array[j];
//         $array[j] = temp;
//     }
//     return $array;
//     // $array.each(function()) {

//     // }
// }

// $('#cell1').on("click", function(event) {
//   $('#cell1').css({"background-color": "red"});
// });

// $('#cell2').on("click", function(event) {
//   $('#cell2').css({"background-color": "red"});
// });

// $('#cell3').on("click", function(event) {
//   $('#cell3').css({"background-color": "blue"});
// });

// $('#cell4').on("click", function(event) {
//   $('#cell4').css({"background-color": "blue"});
// });

// }




// $('#cell5').on("click", function(event) {
//   $('#cell5').css({"background-color": "black"});
// });

// $('#cell6').on("click", function(event) {
//   $('#cell6').css({"background-color": "black"});
// });

// $('#cell7').on("click", function(event) {
//   $('#cell7').css({"background-color": "yellow"});
// });

// $('#cell8').on("click", function(event) {
//   $('#cell8').css({"background-color": "yellow"});
// });


// $('#cell9').on("click", function(event) {
//   $('#cell9').css({"background-color": "pink"});
// });

// $('#cell10').on("click", function(event) {
//   $('#cell10').css({"background-color": "pink"});
// });

// $('#cell11').on("click", function(event) {
//   $('#cell11').css({"background-color": "orange"});
// });

// $('#cell12').on("click", function(event) {
//   $('#cell12').css({"background-color": "orange"});
// });

// $('#cell13').on("click", function(event) {
//   $('#cell13').css({"background-color": "purple"});
// });

// $('#cell14').on("click", function(event) {
//   $('#cell14').css({"background-color": "purple"});
// });

// $('#cell15').on("click", function(event) {
//   $('#cell15').css({"background-color": "brown"});
// });

// $('#cell16').on("click", function(event) {
//   $('#cell16').css({"background-color": "brown"});
// });

// $('#cell17').on("click", function(event) {
//   $('#cell17').css({"background-color": "gray"});
// });

// $('#cell18').on("click", function(event) {
//   $('#cell18').css({"background-color": "gray"});
// });

// $('#cell19').on("click", function(event) {
//   $('#cell19').css({"background-color": "white"});
// });

// $('#cell20').on("click", function(event) {
//   $('#cell20').css({"background-color": "white"});
// });


