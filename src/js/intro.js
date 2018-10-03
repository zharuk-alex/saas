$(function () {
  // $('#introHeading').on('slid.bs.carousel', function (e) {
  //   var carousel_items = $(this).find('.carousel-item').length;
  //   var last_element = $(this).find('.carousel-item').last();
  //   var last_element_heading = $(this).data('heading');
  //   if(carousel_items == (e.to+1)){
  //       last_element.find('h1').delay( 2000 ).animate({
  //         opacity: 0
  //       }, 1000, function () {
  //         console.log($(this));
  //         $(this).text(last_element_heading).animate({
  //           opacity: 1
  //         }, 1000).css({
  //           color:'#f89f35',
  //           fontSize: "6rem"
  //         })
  //       })
  //   }
    // console.log(carousel_items +" "+ (e.to+1));
    // console.log(last_element.text());
    // console.log(last_element_heading);
  // })

  // $(".rotate").textrotator({
  //   animation: "flipCubeUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  //   separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  //   speed: 2000 // How many milliseconds until the next word show.
  // });

  $("#js-rotating").Morphext({
    animation: "flipInX",
    // loop:0,
    complete: function () {
      // console.log($(this.element[0].children));
      var container = this.element;
      if(this.phrases.length == this.position){
        // console.log(this.phrases[this.position-1]);
        // morphext active
        this.stop();

        setTimeout(function () {
          // console.log(container);
          $.when($(container).find('span').animate({opacity:0},600))
                               .done(function() {
              $(container).find('span').html('').append(
                $('<img>',{
                  src:"../assets/img/online_logo.png",
                  css: {width:'100%'}
                })
              ).animate({opacity:1},600)
          });
        },2000)

      }
    }
  });
})
