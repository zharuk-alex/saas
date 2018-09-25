$(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop() > ($('#intro .container').height()+$('#menu').height())) {
      $('.fixed-container').fadeIn(300);
    } else {
      $('.fixed-container').fadeOut(300);
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
