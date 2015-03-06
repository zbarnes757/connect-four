
Game.redTurn = true;

Game.bindEvents = function(){
  $('td').click(function(event){
    event.preventDefault();
    Game.handleClick($(this))
  });
};

Game.handleClick = function(td) {
  var color = this.redTurn ? 'red' : 'black'
  var column = td.attr('class').split(' ')[0];
  var row = td.parent().attr('id');
  // console.log(column+ ' ' + row);
  var lastSlot = $('.' + column + '.unfilled').last();
  lastSlot.removeClass('unfilled').addClass('filled');
  lastSlot.find('circle').attr('fill', color);
  this.redTurn = !this.redTurn
};


$(document).ready(function() {

  Game.bindEvents();

});





    // redTurn === !redTurn if (redTurn ? 'red' : 'black');















// columnCheck(colNum, playerColor)

// function columnOneCheck(){
//   var row6Column1 = $('#r6-c1 circle')
//   $('.c1').on('click', function(){
//     row6Column1.attr("fill", "red");
//   })
// }

// function columnTwoCheck(){
//   var row6Column2 = $('#r6-c2 circle')
//   $('.c2').on('click', function(){
//     row6Column2.attr("fill", "red");
//   })
// }



//select column****
//select the last one is white to change the color
//check the row below


// var emptySlot = $('#r6-c1 circle').attr("fill", "white")

// if(emptySlot){
//   $('#r6-c1 circle').attr("fill", "red");
// }
