$(document).ready(function() {
  new WOW().init();


  //
  //scrollTop
  // function scrollToElements(cont, event) {
  //   event.preventDefault();
  //   var id = cont.attr('href'),
  //     top = $(id).offset().top - $('#menu').height();
  //   $('body,html').animate({
  //     scrollTop: top
  //   }, 1500);
  // }
  //
  // $("#menu").on("click", "a", function(e) {
  //   scrollToElements($(this), e)
  // });
  //
  $(".slide-to-next-wrapper").on("click","a", function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  // counterup
  $('.counter').counterUp({delay: 10, time: 1000});
  // /counterup

  // Clients carousel
  $('#clients-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    },
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navText : [
      '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'
    ],
    autoWidth:false,
  })
  $('#intro .carousel').carousel({
  interval: 4000
})
  // Web-tabs
  $('#web-section').on('click', '.nav-link', function () {
    $('#web-section').find('.active').removeClass('active');
    $(this).parent('.nav-item').addClass('active');
  })
  // addActive
  $('#web-section').find('.nav-item').first().addClass('active');
  // temp Usage lowerCase + text-capitalize
  $('#capabilities').find('.nav-link').first().addClass('active');
  $('#capabilities').find('.tab-pane').first().addClass('active');

  // Close $
})
