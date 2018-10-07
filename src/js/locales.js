$(function () {



  $('#menu').find('.dropdown').on('show.bs.dropdown',function (e) {
    var menu = ($('#menu').hasClass( "top-nav-collapse" ))?$(".top-nav-collapse").outerHeight():$('#menu').outerHeight();
    var link = $(this).height();
    var link_top = $(this).position();
    var top = (menu+link_top.top) - link;
    var menu_bgc = $('.navbar').css('background-color');
    console.log("menu height:"+ menu);
    // console.log(link);
    // console.log(top);
    // console.log(link_top.top);
    $(this).find('.dropdown-menu').css({
      'top':menu-link_top.top,
      'background-color':menu_bgc
    });

    // $(this).find('.dropdown-menu').css('background-color', menu_bgc)
    // console.log(e);
  })


  // Locales select
  $('.locales-select-item').on('click', function (e) {
    e.preventDefault();
    var current_locales = $('.locales-modal-link').text();
    var current_locales_flag = $('.locales-modal-link').attr('data-locales-flag');

    var selected_text = $(this).find('.locales-text').text();
    var selected_locales_flag = $(this).find('img').attr('src');

    $(this).find('.locales-text').text(current_locales);
    $(this).find('img').attr('src',current_locales_flag);
    $('.locales-modal-link').text(selected_text);
    $('.locales-modal-link').attr('data-locales-flag', current_locales_flag);

    console.log(current_locales_flag);
    console.log(selected_locales_flag);
    console.log($(this).text());
    $('#localesModalTopRight').modal('hide');
  })

  // End Locales select



  var userLang = navigator.language || navigator.userLanguage;
  console.log(userLang);
  console.log(navigator);
  // Проверяем локал стораж
  // редирект на версию
  // console.log(userLang);
  console.log(window.location.pathname == "/ru/");
  // console.log(window.location);
  // console.log(userLang == "ru-RU" || userLang == "ru");
  // console.log(window.location.pathname !== "/ru/");
  // console.log((userLang == "ru-RU" || userLang == "ru") && window.location.pathname !== "/ru/");
  if((userLang == "ru-RU" || userLang == "ru") && window.location.pathname !== "/ru/"){
    var domen = document.location.origin;
    document.location.href = domen + "/ru/";
    // document.location.replace(domen + "/ru/");
    // document.location.reload(true);
  }else if ((userLang == "ua-UA" || userLang == "ua") && window.location.pathname !== "/ua/"){
    var domen = document.location.origin;
    document.location.href = domen + "/ua/";
    // document.location.replace(domen + "/ua/");
    // document.location.reload(true);
  }
});
