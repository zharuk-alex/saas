$(function () {
  $('#introHeading').on('slid.bs.carousel', function (e) {
    var carousel_items = $(this).find('.carousel-item').length;
    var last_element = $(this).find('.carousel-item').last();
    var last_element_heading = $(this).data('heading');
    if(carousel_items == (e.to+1)){
        last_element.delay( 1500 ).animate({
          opacity: 0
        }, 300)
    }
    console.log(carousel_items +" "+ (e.to+1));
    // console.log(last_element.text());
    console.log(last_element_heading);
  })
})
