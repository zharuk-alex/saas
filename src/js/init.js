$(document).ready(function() {
  new WOW().init();
  svg4everybody();
  console.log('Tes');
  //
  //scrollTop
  function scrollToElements(cont, event) {
    event.preventDefault();
    var id = cont.attr('href'),
      top = $(id).offset().top - $('#menu').height();
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  }

  $("#menu").on("click", ".nav-link-innerer", function(e) {
    scrollToElements($(this), e);
    // $(this).addClass('active');
  });
  $('.scroll-to-element').on("click", function(e) {
    scrollToElements($(this), e);
    // $(this).addClass('active');
  });
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




  // $('#intro .carousel').carousel({
  //   interval: 4000
  // });



  // $('#capabilities').find('.nav-link').first().addClass('active');
  // $('#capabilities').find('.tab-pane').first().addClass('active');

  $('#capabilities').find('.carousel-item').first().addClass('active');
  $('#capabilities .carousel-indicators').find('li').first().addClass('active');

//testimonials
$('.testimonials-holder').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    autoplay: true,
    autoplayHoverPause:true,
    autoplayTimeout: 4000,

})
// // testimonials2
// $('#carouselTestimonials2').carousel({
//   interval: 4000,
//   pause: false
// })
// // testimonials2 end
$('#carouselCapabilities').carousel({
  pause: false,
  interval: 4000,
  ride:"carousel",
  wrap:true
})
  // Close $
})
