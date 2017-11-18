<?php
session_start();

require('connection.php') ;

if ( isset($_POST["username"]) && isset($_POST["password"]) )
{
  $username = htmlentities($_POST["username"]) ;
  $password = htmlentities($_POST["password"]) ;

  // Checks entered info and confirms authorised user.
  // TO DO: Want to add database capability
  if ($username === "UserAdmin" && $password === "EqualMeasures2030" ){
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
  header("Location: login.php") ;
  echo "Invalid Log in - Please try again.";

$conn->close();
}
?>
