var Game = function(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.slots = [['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ['white','white','white','white','white','white','white'],
                  ];
};

Game.prototype.changeColor= function (row, column, color) {
  this.slots[row-1][column-1] = color;
};

Game.prototype.isThereAWinnner = function() {
  $.each(this.slots, function (rowIndex) {
    $.each(this.slots[rowIndex], function(columnIndex) {
      if (this.slots[rowIndex][columnIndex] === 'white') continue;
      //horizontal check
      if (columnIndex < this.slots[rowIndex].length-3) {
        if (this.slots[rowIndex][columnIndex] === this.slots[rowIndex][columnIndex+1] && this.slots[rowIndex][columnIndex+1] === this.slots[rowIndex][columnIndex+2] && this.slots[rowIndex][columnIndex+2] === this.slots[rowIndex][columnIndex+3]) {
          return this.slots[rowIndex][columnIndex];
        }
      }
      //vertical check
      if (rowIndex < this.slots.length-3) {
        if (this.slots[rowIndex][columnIndex] === this.slots[rowIndex+1][columnIndex] && this.slots[rowIndex+1][columnIndex] === this.slots[rowIndex+2][columnIndex] && this.slots[rowIndex+2][columnIndex] === this.slots[rowIndex+3][columnIndex]) {
          return this.slots[rowIndex][columnIndex];
        }
      }
      //left-to-right diagonal check
      if (rowIndex < this.slots.length-3 && columnIndex < this.slots[rowIndex].length-3 ) {
        if (this.slots[rowIndex][columnIndex] === this.slots[rowIndex+1][columnIndex+1] && this.slots[rowIndex+1][columnIndex+1] === this.slots[rowIndex+2][columnIndex+2] && this.slots[rowIndex+2][columnIndex+2] === this.slots[rowIndex+3][columnIndex+3]) {
          return this.slots[rowIndex][columnIndex];
        }
      }
      //right-to-left diagonal check
      if (rowIndex > 3 && columnIndex < this.slots[rowIndex].length-3 ) {
        if (this.slots[rowIndex][columnIndex] === this.slots[rowIndex-1][columnIndex+1] && this.slots[rowIndex-1][columnIndex+1] === this.slots[rowIndex-2][columnIndex+2] && this.slots[rowIndex-2][columnIndex+2] === this.slots[rowIndex-3][columnIndex+3]) {
          return this.slots[rowIndex][columnIndex];
        }
      }
    });
  });
  return null;
}

// Game.prototype.addSlots = function() {
//   for (var row = 1; row < 7; row++) {
//     for (var column = 1; column < 8; column++) {
//       var slot = new Slot(row, column);
//         this.slots.push(slot);
//     }
//   }
// }

// var Slot = function(row, column) {
//   this.row = row;
//   this.column = column;
//   this.color = "white";
// };

// Slot.prototype.changeColor = function(color) {
//   this.color = color;
//  };
