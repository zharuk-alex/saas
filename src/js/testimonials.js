$(function () {

  // Testimonials
  $('#testimonials3-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    nav: false,
    autoWidth:false,
    onInitialized: function () {
      setTimeout(function () {
        $('#carouselTestimonials3').find('.parallax-window').parallax({
          imageSrc: 'assets/img/backgrounds/testimonials.png'
        });
        $('#carouselTestimonials3').animate({opacity:1}, 300);
      },500)
    }
  });
})
