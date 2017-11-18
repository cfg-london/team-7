<?php

session_start();

// Remove all session variables
session_unset();

// Destory the session_start
session_destroy();

header('Location: ../index.html');

?>
