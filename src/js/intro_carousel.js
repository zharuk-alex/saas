$(function () {
  $('#introHeading').on('slid.bs.carousel', function (e) {
    var carousel_items = $(this).find('.carousel-item').length;
    var last_element = $(this).find('.carousel-item').last();
    var last_element_heading = $(this).data('heading');
    if(carousel_items == (e.to+1)){
        last_element.find('h1').delay( 1500 ).animate({
          opacity: 0
        }, 600, function () {
          console.log($(this));
          $(this).text(last_element_heading).animate({
            opacity: 1
          }, 600).css({
            color:'#f89f35'
          })
        })
    }
    console.log(carousel_items +" "+ (e.to+1));
    // console.log(last_element.text());
    console.log(last_element_heading);
  })
})
