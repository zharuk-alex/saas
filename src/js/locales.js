$(function () {

  var languages = [
    {path: 'ru', name:'ru'},
    {path: 'ua', name:'ua'},
    {path: 'en', name:'en'},
  ]


  function checkCurrentLang() {
    var userLanguage = Cookies.get('lang');
    var currentLocation = window.location.pathname.substr(1,2);
    $('#dropdownLocales').text(currentLocation);
    languages.forEach(function (lang, index) {
      if(currentLocation != lang.name){
        $('#dropdownLocales').siblings('.dropdown-menu').append(
          $('<a>',{
            class: "dropdown-item waves-effect waves-light",
            "data-url":lang.name
          }).text(lang.name)
        )
      }
    })
  }
  checkCurrentLang();

  function checkBrowserLang(){
    var browserLang = window.navigator.language || window.navigator.userLanguage;
    return console.log(window);
  }

  checkBrowserLang();
  // append lang

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

  $('#menu').find('.dropdown-menu .dropdown-item').click(function(e){
    //Show table
    e.preventDefault();
    var url_location = $(this).attr('data-url');
    var href = window.location.origin + '/' + url_location + '/';
    console.log(href);
    console.log(window.location);
    Cookies.set('lang',url_location,{ path: '' });
    console.log($(this).attr('href'));
    window.location.href = href;
    // console.log(href);
    // return false;
  });



  // End Locales select




  // console.log(userLang);
  // console.log(navigator);
  // Проверяем локал стораж
  // редирект на версию
  // console.log(userLang);
  // console.log(window.location.pathname == "/ru/");
  // console.log(window.location);
  // console.log(userLang == "ru-RU" || userLang == "ru");
  // console.log(window.location.pathname !== "/ru/");
  // console.log((userLang == "ru-RU" || userLang == "ru") && window.location.pathname !== "/ru/");
  // if((userLang == "ru-RU" || userLang == "ru") && window.location.pathname !== "/ru/"){
  //   var domen = document.location.origin;
  //   document.location.href = domen + "/ru/";
    // document.location.replace(domen + "/ru/");
    // document.location.reload(true);
  // }else if ((userLang == "ua-UA" || userLang == "ua") && window.location.pathname !== "/ua/"){
  //   var domen = document.location.origin;
  //   document.location.href = domen + "/ua/";
    // document.location.replace(domen + "/ua/");
    // document.location.reload(true);
  // }
  // Cookies.remove('lang', { path: '' });
});
