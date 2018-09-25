$(function () {
  $('.universal-holder').on('mouseenter', function (e) {
    console.log(e);
    $(this).find('.description').slideDown(300);
  }).on('mouseleave', function (e) {
    console.log(e);
    $(this).find('.description').slideUp(300);
  })
})
