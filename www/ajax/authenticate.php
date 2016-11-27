<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));
//var_dump($data);
//var_dump($data->data->username);
//var_dump($data->data->password);

$email = $data->data->username;
$password = $data->data->password;

$conn = new mysqli("localhost", "root", "18september2011", "uome");
$sql = "SELECT * FROM users WHERE email = '" . $email . "' AND password = '" . $password ."'";

$result = $conn->query($sql);

if($result->num_rows > 0){
	$output = '{"auth":true}';
}
else{
	$sql2 = "SELECT * FROM users WHERE email = '" . $email."'";
	$result2 = $conn->query($sql2);
	
	if($result2->num_rows == 0){
		$output = '{"auth":"no_user"}';
	}
	else{
		$output = '{"auth":"not_authorized"}';
	}
	
}

$conn->close();

echo($output);
?>