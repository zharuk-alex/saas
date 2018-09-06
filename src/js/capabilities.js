$(document).ready(function() {
  var navListItems = $('div.setup-panel-3 div a'),
    allWells = $('.setup-content-3'),
    allNextBtn = $('.nextBtn-3'),
    allPrevBtn = $('.prevBtn-3');
    allWells.hide();

  navListItems.click(function(e) {
    e.preventDefault();
    var $target = $($(this).attr('href')),
      $item = $(this);

    if (!$item.hasClass('disabled')) {
      navListItems
        .removeClass('active');
      $item.addClass('active');
      allWells.hide();
      $target.fadeIn(500);
    }
  });



  $('div.setup-panel-3 div a.btn-info').trigger('click');
});
