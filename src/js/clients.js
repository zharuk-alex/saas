$(function () {
  // Clients carousel
  var clients_owl = $('#clients-carousel');
  clients_owl.owlCarousel({
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
    lazyLoad: true,
    onInitialized: function (e) {
      $('#clients').css({opacity:1});
    }

  });

});
