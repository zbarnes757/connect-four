var Controller = function() {
  this.bones = new Bones();
  this.view = new View();
};

Controller.prototype.addDie = function() {
  die = this.bones.addDie();
  this.view.addDie(die);
};

Controller.prototype.rollDice = function() {
  dice = this.bones.rollDice();
  this.view.update(this.bones.dice);
};

Controller.prototype.bindEvents = function(){
  var self = this;
  $('#roller button.add').click(function(){
    self.addDie();
  });
  $('#roller button.roll').click(function(){
    self.rollDice();
  });
};
