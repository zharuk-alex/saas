$(document).ready(function() {
  new WOW().init();

  //
  //scrollTop
  function scrollToElements(cont, event) {
    event.preventDefault();
    var id = cont.attr('href'),
      top = $(id).offset().top - $('#menu').height();
    $('body,html').animate({
      scrollTop: top
    }, 1500);
    console.log(cont.css('padding-top'));
    console.log(cont);
  }

  $("#menu").on("click", "a", function(e) {
    scrollToElements($(this), e)
  });
  //

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
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoWidth:false,
  })
  // Close $
})
