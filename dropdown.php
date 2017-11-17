<?php
require_once "";
$query = "SELECT indicator
FROM database ORDER BY name ASC";
error_log ($query);
$result = $db ->query($query);
while ($row = $result ->fetch_assoc()) {
echo ’<option value="’
echo $row["indicator"] . ’">’;
echo $row["indicator"]
echo ’</option >’;
}
