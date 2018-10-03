$(function () {
  // Clients carousel
  var clients_owl = $('#clients-carousel');
  clients_owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 3,
        slideBy:3
      },
      600: {
        items: 3,
        slideBy:3
      },
      1000: {
        items: 6,
        slideBy:6
      }
    },
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navText : [
      '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'
    ],
    autoWidth: false,
    lazyLoad: true,
    onInitialized: function (e) {
      $('#clients').css({opacity:1});
    }

  });

});
