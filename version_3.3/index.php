<?php
// список языков
$sites = array(
    "en" => "./en/",
    "ru" => "./ru/",
    "ua" => "./ua/",
);

$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
//

if (!in_array($lang, array_keys($sites))){
    $lang = 'en';
}
if (isset($_COOKIE['lang'])){
  $lang = $_COOKIE['lang'];
}
header('Location: ' . $sites[$lang]);

?>
