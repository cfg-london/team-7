<?php
require("connection.php");

$tableName = $_POST['tableId'];

$sql = "SELECT DISTINCT Country FROM `$tableName`";

$result = $conn->query($sql);

$JSONTable = array();

while ($row = mysqli_fetch_assoc($result)){
  $JSONTable[] = $row;
}

echo json_encode($JSONTable);

$conn->close();
?>
