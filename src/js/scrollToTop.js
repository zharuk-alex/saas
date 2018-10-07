$(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop() > ($('#intro .container').height()+$('#menu').height()) && !($("#fixedContainerModal").data('bs.modal') || {})._isShown) {

      $('.fixed-container').fadeIn(300);
      // console.log(($("#fixedContainerModal").data('bs.modal') || {})._isShown);
    } else {
      $('.fixed-container').fadeOut(300);
      $('.popover').popover('hide');
      $('#show_dialog').find('i').removeClass('popover-show').addClass('popover-hide');
      // console.log(($("#fixedContainerModal").data('bs.modal') || {})._isShown);
    }
    var btn_position = $('#scrollToTop').offset().top; // position = { left: 42, top: 567 }
    var counterUp_start = $('.advantages-holder').offset().top; // position = { left: 42, top: 567 }
    var counterUp_end = $('.advantages-holder').offset().top + $('.advantages-holder').height(); // position = { left: 42, top: 567 }

    if(btn_position > counterUp_start && btn_position < counterUp_end){
      $('#scrollToTop').css({backgroundColor:"#ffffff"})
    }else{
      $('#scrollToTop').css({backgroundColor:"transparent"})
    }

  });

  $(document).on('click','.navbar-brand, #scrollToTop', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  })
});
