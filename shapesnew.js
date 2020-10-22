$(document).ready(function() {
    
  $('.kika').click(function(e) {
    e.preventDefault();
    var $a = $(this).addClass('clicked');
    setTimeout(function() {
      window.location.assign($a.attr('href'));
    }, 400);
  });
    
  $('.bubba').click(function(e) {
    e.preventDefault();
    var $a = $(this).addClass('clicked');
    setTimeout(function() {
      window.location.assign($a.attr('href'));
    }, 400);
  });
    
    
});