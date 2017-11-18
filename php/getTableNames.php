<?php
require("php/connection.php");

$sql = "USE equalmeasures; SHOW tables;";
$result = $conn->query($sql);

$JSONTable = array();

while ($row = mysqli_fetch_assoc($result)){

  $JSONTable[] = $row;

}

echo json_encode($JSONTable);

$conn->close();

?>
