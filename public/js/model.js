var Game = function(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.redTurn = true;
    this.slots = [['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ];
};


Game.prototype.bindEvents = function(){
  var that = this;
  $('td').click(function(){
    that.handleClick($(this))
  });
};

Game.prototype.handleClick = function(td) {
  var color = this.redTurn ? 'red' : 'black'
  var column = td.attr('class').split(' ')[0];
  var lastSlot = $('.' + column + '.unfilled').last();
  var row = lastSlot.parent().attr('id');
  this.changeColor(row, column, color);
  lastSlot.removeClass('unfilled').addClass('filled');
  lastSlot.find('circle').attr('fill', color);
  this.isThereAWinnner(color);
  this.redTurn = !this.redTurn
  color = this.redTurn ? 'red' : 'black'
  var startingPiece = $('#starting-piece').attr('fill', color)
};

Game.prototype.changeColor = function (row, column, color) {
  this.slots[row-1][column-1] = color;
};

Game.prototype.isThereAWinnner = function(color) {
  var game = this;
  $.each(game.slots, function (rowIndex) {
    $.each(game.slots[rowIndex], function(columnIndex) {
      if (game.slots[rowIndex][columnIndex] === 'white') return;
      //horizontal check
      if (columnIndex < game.slots[rowIndex].length-3) {
        if (game.slots[rowIndex][columnIndex] === game.slots[rowIndex][columnIndex+1] && game.slots[rowIndex][columnIndex+1] === game.slots[rowIndex][columnIndex+2] && game.slots[rowIndex][columnIndex+2] === game.slots[rowIndex][columnIndex+3]) {
          alert(color + " is the winner!");
          return game.slots[rowIndex][columnIndex];
        }
      }
      //vertical check
      if (rowIndex < game.slots.length-3) {
        if (game.slots[rowIndex][columnIndex] === game.slots[rowIndex+1][columnIndex] && game.slots[rowIndex+1][columnIndex] === game.slots[rowIndex+2][columnIndex] && game.slots[rowIndex+2][columnIndex] === game.slots[rowIndex+3][columnIndex]) {
          alert(color + " is the winner!");
          return game.slots[rowIndex][columnIndex];
        }
      }
      //left-to-right diagonal check
      if (rowIndex < game.slots.length-3 && columnIndex < game.slots[rowIndex].length-3 ) {
        if (game.slots[rowIndex][columnIndex] === game.slots[rowIndex+1][columnIndex+1] && game.slots[rowIndex+1][columnIndex+1] === game.slots[rowIndex+2][columnIndex+2] && game.slots[rowIndex+2][columnIndex+2] === game.slots[rowIndex+3][columnIndex+3]) {
          alert(color + " is the winner!");

          return game.slots[rowIndex][columnIndex];
        }
      }
      //right-to-left diagonal check
      if (rowIndex > 3 && columnIndex < game.slots[rowIndex].length-3 ) {
        if (game.slots[rowIndex][columnIndex] === game.slots[rowIndex-1][columnIndex+1] && game.slots[rowIndex-1][columnIndex+1] === game.slots[rowIndex-2][columnIndex+2] && game.slots[rowIndex-2][columnIndex+2] === game.slots[rowIndex-3][columnIndex+3]) {
          alert(color + " is the winner!");
          return game.slots[rowIndex][columnIndex];
        }
      }
    });
  });
  return false;
}

