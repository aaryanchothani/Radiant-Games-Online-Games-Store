<?php
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$name = $_POST['name'];

	// Database connection
	$conn = new mysqli('localhost','root','','radiant');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into user(username, password, email, name) values(?, ?, ?, ?)");
		$stmt->bind_param("ssss", $username, $password, $email, $name);
		$execval = $stmt->execute();
		echo $execval;
		echo "<script> scrolls() </script>" 
		$stmt->close();
		$conn->close();
	}
?>