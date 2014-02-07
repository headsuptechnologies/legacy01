$(function() {
  var $ui = {
    view: $('#view'),
    toggle: $('#toggle'),
    buttons: $('#buttons li')
  };

  // toggles the control panel
  $ui.toggle.click( function() {
    var show = !$ui.view.hasClass('progress');
    $ui.view[ show ? 'addClass' : 'removeClass' ]( 'progress' );
  });


  // selecting option buttons
  $ui.buttons.click( function() {
    var target = $(this)
      , show = !target.hasClass('on');
    target[ show ? 'addClass' : 'removeClass' ]( 'on' );

    // kick off the animation
    target.removeClass('activate');
    window.setTimeout( function() { target.addClass('activate'); },1);
  });

});