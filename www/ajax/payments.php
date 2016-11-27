<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "18september2011", "uome");
$sql = "SELECT id, amount as totalAmount, due, name from corepayment where userId = 1";
$result = $conn->query($sql);


$output = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)){
	if($output != ""){
		$output .= ",";
	}

	$output .= '{"id":"' . $rs["id"] .'",';
	$output .= '"totalAmount":"' . $rs["totalAmount"] .'",';
	$output .= '"due":"' . $rs["due"] .'",';
	$output .= '"name":"' . $rs["name"] .'",';
	$output .= '"payers":[';

	$innerSql = "SELECT p.amount as userAmount, p.paid, u.fname, u.lname from payments p INNER JOIN users u on u.user = p.userId WHERE p.pid = " . $rs["id"];
	$innerResult = $conn->query($innerSql);

	$payers = "";
	while($innerRs = $innerResult->fetch_array(MYSQLI_ASSOC)){
		if($payers != ""){
			$payers .= ",";
		}

		$payers .= '{"userAmount":"' . $innerRs['userAmount'] . '",';
		$payers .= '"paid":' . $innerRs['paid'] . ',';
		$payers .= '"fname":"' . $innerRs['fname']. '",';
		$payers .= '"lname":"' . $innerRs['lname']. '"}';
		
	}

	$output .= $payers . ']}';


}
//var_dump($output);

$output ='{"records":['.$output.']}';
$conn->close();

echo($output);

?>