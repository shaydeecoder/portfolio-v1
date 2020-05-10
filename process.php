<?php
	ini_set();
  if (isset($_POST['email']) && isset($_POST['fullName']) && isset($_POST['message'])) {

    //Email Information
    $admin_email = "shaydeecoder@gmail.com";
    $name = $_POST['fullName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    //Send Email
    mail($admin_email, "New Email From Website", $message . ' - ', "From:" . $email);
	
	echo "Email sent";

  }
 
