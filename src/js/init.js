$(document).ready(function() {
  console.log("init");
  new WOW().init();

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
    autoplayTimeout: 3000
  })
  // Close $
})
