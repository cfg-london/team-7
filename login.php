
<!DOCTYPE html>
<?php
  session_start();

  if ( isset($_SESSION['appuser']) )
  {
    header('Location: ../admin.php');
  }
  else if ( isset($_SESSION['apperror']) )
  {
    $error = $_SESSION['apperror'];

    // Remove session variables
    session_unset();

    // Destroy the session
    session_destroy();
  }

 ?>


<html>
  <head>
    <meta name="viewport" content="width=device-width, user-scalable=no"/>
  </head>

  <body>


      <div class="loginContent" id="login">

        <div class="panel-header"><h1>Admin User - Login</h1></div>

        <div class="panel-body">


        <div class="form">
          <form name="loginForm" action="auth.php" method="post" >
            <p>Enter your username:</p>
            <input type="text" name="username"  value="" required>
            <p>Enter your password:</p>
            <input type="password" name="password" value="" required>
            <input type="submit" value="Submit" onsubmit="auth.php">
          </form>
        </div>


        </div>
      </div>


  </body>
</html>
