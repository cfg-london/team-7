<?php
require("php/connection.php");

$tableName = $_POST['tableId'];
$ageArr = $_POST['ageId[]'];
$countryArr = $_POST['countryId[]'];

$countryId = implode(',', $countryArr);
$ageID = implode(',', $ageArr);

$sql = "SELECT * FROM '$tableName' AS tb WHERE
        tb.country IN ('$countryId')
        AND tb.age IN ('$ageId')";

$result = $conn->query($sql);

$JSONTable = array();

while ($row = mysqli_fetch_assoc($result)){

  $JSONTable[] = $row;

}

echo json_encode($JSONTable);

$conn->close();


?>
