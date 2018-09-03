$(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop() > ($('#intro .container').height()+$('#menu').height())) {
      $('#scrollToTop').fadeIn(600);
    } else {
      $('#scrollToTop').fadeOut(600);
    }
  });

  $('#scrollToTop').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  })
});
