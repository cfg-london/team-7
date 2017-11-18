<?php
session_start();
$error = null;
$success = null;

if( isset($_SESSION['add_success']) ) {
    $success = $_SESSION['add_success'];
    unset($_SESSION['add_success']);
}
elseif( isset($_SESSION['add_error']) ) {
  $error = $_SESSION['add_error'];
  unset($_SESSION['add_error']);
}
?>


<html>
  <head>
    <meta name="viewport" content="width=device-width, user-scalable=no"/>
      <link href="css/style.css" rel="stylesheet" type="text/css">
  </head>

  <body>

        <div class="panel-header"><h1>Admin User - Add new Indicator</h1></div>

        <div class="panel-body">


        <div class="form">
          <form name="IndicatorForm" action="php/newTheme.php" method="post" >
            <p>Enter filepath for csv:</p>
            <input type="text" name="filepath"  value="" required>
            <input type="submit" value="Submit" onsubmit="php/newTheme.php">


          </form>

        </div>
        <div class="success_holder"><?php echo $success; ?></div>
        <div class="error_holder"><?php echo $error; ?></div>

        </div>
      </div>


  </body>
</html>
