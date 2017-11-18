<?php
require("connection.php");

$tableName = $_POST['tableId'];
$ageArr = $_POST['ageId'];
$countryArr = $_POST['countryId'];

for ($i = 0; $i < count($countryArr); $i++){
    $countryArr[$i] = "'" . $countryArr[$i] . "'" ;
}

$countryId = implode(',', $countryArr);

$sql = "SELECT Country, SUBSTRING(Survey, 1, 4) AS Year";

// Get all values of age checked and add to SQL query
if (!empty($ageArr)){
  $sql .= ",";
  for ($i = 0; $i < count($ageArr); $i++){
    if( $i != count($ageArr) - 1 ) {
      $sql .= "`" . $ageArr[$i] . '`AS Age, ';
      continue;
    }
    $sql .= "`". $ageArr[$i] . '`';
  }
}else{
  // If no ages selected, get total
  $sql .= ", Total";
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
