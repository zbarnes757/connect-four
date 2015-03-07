$(document).ready(function() {
  var game = new Game();
  game.bindEvents();

  $('#player2_form').submit(function(event) {
    event.preventDefault();
    var formData = $('#player2_form').serialize();
    var ajaxResponse = $.ajax({
      url: '/find_user',
      type: 'get',
      data: formData,
    });
    ajaxResponse.done(function(serverData) {
      console.log(serverData);
      var template = $('#player2-info-template');
      template.find('.player-name').text(serverData.name)
      template.find('.player-games').text(serverData.games_won)
      template.css('display', 'inline-block')
      console.log(template);
      $('#player2_form').parent().hide();
      $('#player-2').append(template);
    })
    ajaxResponse.fail(function() {
      console.log("you suck!");
    });


   });

  $('svg:first')
    .draggable()
    .bind('mousedown', function(event, ui){
      // bring target to front
      $(event.target.parentElement).append( event.target );
    })
    .bind('drag', function(event, ui){
      // update coordinates manually, since top/left style props don't work on SVG
      event.target.setAttribute('x', ui.position.left);
      event.target.setAttribute('y', ui.position.top);
    });

  $('#player1_form').submit(function(event) {
    event.preventDefault();
    var formData = $('#player1_form').serialize();
    var ajaxResponse = $.ajax({
      url: '/find_user',
      type: 'get',
      data: formData,
    });
    ajaxResponse.done(function(serverData) {
      console.log(serverData);
      var template = $('#player1-info-template');
      template.find('.player-name').text(serverData.name)
      template.find('.player-games').text(serverData.games_won)
      template.css('display', 'inline-block')
      console.log(template);
      $('#player1_form').parent().hide();
      $('#player-1').append(template);
    })
    ajaxResponse.fail(function() {
      console.log("you suck!");
    });
  });

  $('#signup-form').submit(function(event) {
    event.preventDefault();
    var formData = $('#signup-form').serialize();
    var ajaxResponse = $.ajax({
      url: '/signup',
      type: 'post',
      data: formData,
    })
    ajaxResponse.done(function(serverData) {
      alert(serverData.name + " has been added!");
    })
    ajaxResponse.fail(function(serverData) {
      console.log(serverData);
    })

  })

});



