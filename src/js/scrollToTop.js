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
    var btn_position = $('#scrollToTop').offset().top; // position = { left: 42, top: 567 }
    var counterUp_start = $('#counterup-section2').offset().top; // position = { left: 42, top: 567 }
    var counterUp_end = $('#counterup-section2').offset().top + $('#counterup-section2').height(); // position = { left: 42, top: 567 }
    if(btn_position > counterUp_start && btn_position < counterUp_end){
      console.log('enter');
      $('#scrollToTop').css({backgroundColor:"#ffffff"})
    }else{
      $('#scrollToTop').css({backgroundColor:"transparent"})
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
