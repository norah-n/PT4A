<?php

$db = new mysqli("142.93.103.37", "test_user", "Eek6FEuxS7Y8IGlV@2021",  "testDB");

$sql = "SELECT * from patient ";
$sql_results = mysqli_query($db, $sql);
$num_rows= mysql_num_rows($sql_results);
echo $num_rows;



?>