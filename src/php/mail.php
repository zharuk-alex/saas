<?php
if(isset( $_POST['name']))
  $name = $_POST['name'];
if(isset( $_POST['email']))
  $email = $_POST['email'];
if(isset( $_POST['message']))
  $message = $_POST['message'];
if(isset( $_POST['message']))
  $message = $_POST['message'];
if(isset( $_POST['phone']))
  $subject = $_POST['phone'];
if(isset( $_POST['company']))
  $subject = $_POST['company'];

$content="From: $name \n Email: $email \n Message: $message";
$recipient = "youremail@here.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>
