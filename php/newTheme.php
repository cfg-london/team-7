<?php
require("connection.php");

$fileName = "testCSV.csv";

$file = fopen($fileName, 'r');
$tuples = fgetcsv($file);

$tableName = pathinfo($fileName, PATHINFO_FILENAME);

$attributes = array();
$total_fields = 0;

for($i=0; $i<count($tuples); $i++) {
  $total_fields++;
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

$sql = "CREATE TABLE $tableName (" . implode(', ', $fields) . ');';
echo $sql;

$conn->query($sql);
$conn->close();
/*
while( ($tuples = fgetcsv($file)) !== FALSE ) {
  $fields = array();

  for($i=0; $i<$total_fields; $i++){
    $fields[] =
  }
}
*/
