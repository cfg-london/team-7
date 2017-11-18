<?php
session_start();

require('connection.php') ;

if ( isset($_POST["username"]) && isset($_POST["password"]) )
{
  $username = htmlentities($_POST["username"]) ;
  $password = htmlentities($_POST["password"]) ;

  //call the validateUser function here
  if ($username === "User" && $password === "Password" ){
    $_SESSION["appuser"] = $username;
      header("Location: admin.php");
  } else {
          $error = "Invalid Log in - Please try again.";
          $_SESSION["apperror"] = $error ;
          header("Location: login.php");
  }
}
else
{
  //Add echo if username and password not set here
  header("Location: login.php") ;
  echo "Invalid Log in - Please try again.";

$conn->close();
}
?>
