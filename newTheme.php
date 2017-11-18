<?php
require("connection.php");
session_start();

$fileName = "testCSV.csv";

$file = fopen($fileName, 'r');
$tuples = fgetcsv($file);

$tableName = pathinfo($fileName, PATHINFO_FILENAME);

$attributes = array();
$totalFields = 0;

for($i=0; $i<count($tuples); $i++) {
  $totalFields++;
  $field = strtolower(trim($tuples[$i]));


  if($i==0 || $i==1) {
    $fields[] = $field .' VARCHAR(255)';
    continue;
  }

  if($i>2) {
    $fields[] = "`" . $field . "`" . ' DOUBLE';
  }
  else{ $fields[] = $field .' DOUBLE';
  }
}

$sql = "CREATE TABLE $tableName (" . implode(', ', $fields) . ", PRIMARY KEY(country, survey));";
$conn->query($sql);
$insertCheckStatus = False;

while( ($tuples = fgetcsv($file)) !== FALSE ) {
  $fields = array();

  for($i=0; $i<count($tuples); $i++){
    $fields[] ='\''.addslashes($tuples[$i]).'\'';
  }

  $sql = "INSERT INTO $tableName values(" . implode(', ', $fields) . ');';
  //$conn->query($sql);
  if($conn->query($sql) === True){
  $insertCheckStatus = True;
}
}

if ($insertCheckStatus) {
      $_SESSION['add_success'] = "Table created and records inserted successfully.";

    } else {
      $_SESSION['add_error'] = "Error: " . $conn->error;
}
echo $_SESSION['add_success'];


$conn->close();
header('Location: ../admin.php');
?>
