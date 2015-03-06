$(document).ready(function() {
  $('td').click(function(event) {
    var column = $(this).attr('class').split(' ')[0];
    var row = $(this).parent().attr('id');
    // console.log(column+ ' ' + row);
    var lastSlot = $('.' + column + '.unfilled').last();
    lastSlot.removeClass('unfilled').addClass('filled');
    lastSlot.find('circle').attr('fill', 'red');

  });
});

// columnCheck(colNum, playerColor)

function columnOneCheck(){
  var row6Column1 = $('#r6-c1 circle')
  $('.c1').on('click', function(){
    row6Column1.attr("fill", "red");
  })
}

function columnTwoCheck(){
  var row6Column2 = $('#r6-c2 circle')
  $('.c2').on('click', function(){
    row6Column2.attr("fill", "red");
  })
}



//select column****
//select the last one is white to change the color
//check the row below


// var emptySlot = $('#r6-c1 circle').attr("fill", "white")

// if(emptySlot){
//   $('#r6-c1 circle').attr("fill", "red");
// }
