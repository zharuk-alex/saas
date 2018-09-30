$(document).ready(function() {
  new WOW().init();
  svg4everybody();

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
  // Web-tabs
  $('#web-section').on('click', '.nav-link', function () {
    $('#web-section').find('.active').removeClass('active');
    $('#web-section').find('.tab-pane').removeClass('show');
    var tab_pane = $(this).prop('href');
    $(this).parent('.nav-item').addClass('active');
    // $(tab_pane).addClass(show)
  })
  // addActive
  $('#web-section').find('.nav-item').first().addClass('active');
  $('#web-section').find('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

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
