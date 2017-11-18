<?php
require("connection.php");

$tableName = $_POST['tableId'];
$ageArr = $_POST['ageId[]'];
$countryArr = $_POST['countryId[]'];


for ($i = 0; $i < count($countryArr); $i++){
    $countryArr[$i] = "'" . $countryArr[$i] . "'" ;
}

$countryId = implode(',', $countryArr);

$sql = "SELECT Country";

if (!$ageArr){
  $sql .= ",";
  for ($i = 0; $i < count($ageArr); $i++){
    if( $i != count($ageArr) - 1 ) {
      $sql .= "`" . $ageArr[$i] . '`, ';
      continue;
    }
    $sql .= "`". $ageArr[$i] . '`';
  }
}

$sql .= "FROM `$tableName` AS tb WHERE
        tb.country IN ($countryId);";

$result = $conn->query($sql);

$JSONTable = array();

while ($row = mysqli_fetch_assoc($result)){

  $JSONTable[] = $row;

}

echo json_encode($JSONTable);

$conn->close();


?>
