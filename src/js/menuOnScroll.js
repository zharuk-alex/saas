// nav-link-innerer
// Cache selectors
  // var topMenu = $("#top-menu");
  // var topMenuHeight = topMenu.outerHeight()+15;
  //   // All list items
  // var menuItems = topMenu.find("a");
  //   // Anchors corresponding to menu items
  // var scrollItems = menuItems.map(function(){
  //     var item = $($(this).attr("href"));
  //     if (item.length) { return item }
  //   });

// Bind to scroll
// $(window).scroll(function(){
//   // Get container scroll position
//   var fromTop = $(this).scrollTop()+topMenuHeight;
//
//    // Get id of current scroll item
//   var cur = scrollItems.map(function(){
//     if ($(this).offset().top < fromTop){
//       return this
//     }
//   });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
//    // Set/remove active class
//    menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
// });​
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
})
