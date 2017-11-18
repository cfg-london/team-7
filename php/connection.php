<?php

$servername = "root";
$username = "root";
$password = "root";
$database = $username ;

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}
else
{

}


?>
