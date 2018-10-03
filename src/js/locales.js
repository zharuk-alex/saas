$(function () {
  var userLang = navigator.language || navigator.userLanguage;
  console.log(userLang);
  console.log(navigator);
  // Проверяем локал стораж
  // редирект на версию
  // console.log(userLang);
  // console.log(window.location.pathname);
  // console.log(window.location);
  // console.log(userLang == "ru-RU" || userLang == "ru");
  // console.log(window.location.pathname !== "/ru/");
  // console.log((userLang == "ru-RU" || userLang == "ru") && window.location.pathname !== "/ru/");
  if((userLang == "ru-RU" || userLang == "ru") && window.location.pathname !== "/ru/"){
    var domen = document.location.origin;
    // document.location.href = domen + "/ru/";
    // document.location.replace(domen + "/ru/");
    // document.location.reload(true);
  }else if ((userLang == "ua-Ua" || userLang == "ua") && window.location.pathname !== "/ua/"){
    var domen = document.location.origin;
    // document.location.href = domen + "/ua/";
    // document.location.replace(domen + "/ua/");
    // document.location.reload(true);
  }
});
