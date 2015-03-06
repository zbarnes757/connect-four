var View = function() {};

View.prototype.createDiv = function(die) {

  return "<div class='die'>" + die.value + "</div>";
};
