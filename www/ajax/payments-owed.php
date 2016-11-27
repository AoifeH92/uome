<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "18september2011", "uome");
$sql = "SELECT p.*, u.fname, u.lname from payments p INNER JOIN users u on u.user = p.userId where p.userId = 1 and p.paid = 0";
$result = $conn->query($sql);


$output = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)){
	if($output != ""){
		$output .= ",";
	}

	$output .= '{"id":"' . $rs["id"] .'",';
	$output .= '"userId":"' . $rs["userId"] .'",';
	$output .= '"fname":"' . $rs["fname"] .'",';
	$output .= '"lname":"' . $rs["lname"] .'",';
	$output .= '"amount":"' . $rs["amount"] .'",';
	$output .= '"paid":"' . $rs["paid"] .'"}';
}

$output ='{"records":['.$output.']}';
$conn->close();

echo($output);

?>