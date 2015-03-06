var Controller = function() {
  this.game = new Game();
  this.view = new View();
};

Controller.prototype.addGame = function() {
  slots = this.game.addSlots();
};

Controller.prototype.bindEvents = function(){
  var self = this;
  $('#slot').click(function(){
  });
};
