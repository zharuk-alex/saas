$(document).ready(function() {
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

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
    $('#platform-section .platform-content').find('.tab-pane').each(function () {
      console.log(this);
      $(this).find('.nav-item').first().addClass('active')
    });
    $('.tab-content').on('click','.nav-link', function () {
      $(this).closest('.tab-pane').find('.nav-tabs .nav-link').removeClass('active');
      $(this).closest('.tab-pane').find('.nav-tabs .nav-item').removeClass('active');
      $(this).parent('.nav-item').addClass('active');
    })
});
