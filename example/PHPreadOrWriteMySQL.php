<?php
// 配置
$servername = "host";
$username = "username";
$password = "password";
$dbName = 'dbName';
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbName);
// 检测连接
if (!$conn) {
	die("连接错误: " . mysqli_connect_error());
}
echo "连接成功<br>";
// 创建数据库
$sql = "CREATE DATABASE myDB";
if (mysqli_query($conn, $sql)) {
	echo "数据库创建成功<br>";
} else {
	echo "Error creating database: " . mysqli_error($conn) . "<br>";
}
// 使用 sql 创建数据表
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
title VARCHAR(30),
body VARCHAR(200),
)";
if (mysqli_query($conn, $sql)) {
	echo "数据表 MyGuests创建成功<br>";
} else {
	echo "创建数据表错误: " . mysqli_error($conn) . "<br>";
}
// 插入记录
$sql = "INSERT INTO MyGuests (title, body)
VALUES ('Hello World', 'Hello MySQL')";
if (mysqli_query($conn, $sql)) {
	echo "新记录插入成功<br>";
} else {
	echo "错误: " . $sql . "<br>" . mysqli_error($conn);
}
// 读数据
$sql = "SELECT id, title, body FROM MyGuests";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
	// 输出数据
	while($row = mysqli_fetch_assoc($result)) {
		echo $row["id"] . ' ' . $row["title"]. ' ' . $row["body"] . "<br>";
	}
} else {
	echo "0 结果<br>";
}
mysqli_close($conn);
?>