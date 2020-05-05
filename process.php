<?php
  if (isset($_POST['email'])) {

    //Email Information
    $admin_email = "shaydeecoder@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    //Send Email
    mail($admin_email, "New Email From Website", $message . ' - ', "From:" . $email);

  }