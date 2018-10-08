$(function () {
  var topMenu = $("#menu");
  var topMenuHeight = topMenu.outerHeight();
  var menuItems = topMenu.find(".nav-link-innerer");
  var scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item }
    });

  $(window).scroll(function(){
    var fromTop = $(this).scrollTop()+topMenuHeight;
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop){
        return this
      }
    });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");

    // hide locales modal
    $('#menu').find(".dropdown-menu").dropdown('dispose');
  })
})
