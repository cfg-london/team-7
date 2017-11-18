<?php
require("connection.php");

/*$tableName = $_POST['tableId'];
$ageArr = $_POST['ageId[]'];
$countryArr = $_POST['countryId[]'];
*/

$tableName = "married women currently using any method of contraception";
$ageArr = ["15_19", "30_39"];
$countryArr = ["Kenya", "Colombia"];

for ($i = 0; $i < count($countryArr); $i++){
    $countryArr[$i] = "'" . $countryArr[$i] . "'" ;
}

$countryId = implode(',', $countryArr);

$sql = "SELECT Country,";


for ($i = 0; $i < count($ageArr); $i++){
  if( $i != count($ageArr) - 1 ) {
    $sql .= "`" . $ageArr[$i] . '`, ';
    continue;
  }
  $sql .= "`". $ageArr[$i] . '`';
}
echo $sql .= "FROM `$tableName` AS tb WHERE
        tb.country IN ($countryId);";

$result = $conn->query($sql);

$JSONTable = array();

while ($row = mysqli_fetch_assoc($result)){

  $JSONTable[] = $row;

}

echo json_encode($JSONTable);

$conn->close();


?>
