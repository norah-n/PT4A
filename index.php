<?php

$db = new mysqli("142.93.103.37", "test_user", "Eek6FEuxS7Y8IGlV@2021", "testDB");

// This query will select patient names only from patient table, from the database
$sql = "SELECT name from testDB.patient";

mysql_query($db, $sql);

?>




<html>

<head>
    <title>
        PT4A Angular Project
    </title>
    <script src="C:\Users\Usr\Desktop\PT4A_Angular/angular.min.js"></script></head>

<body>

<div ng-app="">
    <p>Name :<input type="text" ng-model="name"></p>
    <h1>Hello {{name}}</h1>
</div>

</body>

</html>