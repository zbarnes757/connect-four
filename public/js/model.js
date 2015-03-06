var Game = function(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.slots = [];
};

Game.prototype.addSlots = function() {
  for (var row = 1; row < 7; row++) {
    for (var column = 1; column < 8; column++) {
      var slot = new Slot(row, column);
        this.slots.push(slot);
    }
  }
}

var Slot = function(row, column) {
  this.row = row;
  this.column = column;
  this.color = "white";
};

Slot.prototype.changeColor = function(color) {
  this.color = color;
 };
