$(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop() > ($('#intro .container').height()+$('#menu').height()) && !($("#fixedContainerModal").data('bs.modal') || {})._isShown) {

      $('.fixed-container').fadeIn(300);
      // console.log(($("#fixedContainerModal").data('bs.modal') || {})._isShown);
    } else {
      $('.fixed-container').fadeOut(300);
      $('.popover').popover('hide');
      // console.log(($("#fixedContainerModal").data('bs.modal') || {})._isShown);
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
