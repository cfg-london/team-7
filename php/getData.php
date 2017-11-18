<?php
require("php/connection.php");

$tableName = $_POST['tableId'];
$ageRange = $_POST['ageId[]'];
$countrySelected = $_POST['countryId[]'];

$sql = "SELECT * FROM ";
$result = $conn->query($sql);

$JSONTable = array();

while ($row = mysqli_fetch_assoc($result)){

  $JSONTable[] = $row;

}

echo json_encode($JSONTable);

$conn->close();


?>
