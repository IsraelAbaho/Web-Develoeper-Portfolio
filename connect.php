<?php

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$project = $_POST['project'];


$conn = new mysqli('localhost','root','','pf');

if($conn->connect_error){
    die('Sorry Connection Failed : ' .$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into client(firstName, lastName, email, project)
    values(?, ?, ?, ?, )");
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $project);
    $stmt->execute();
    echo "Job Added Thank You!";
    $stmt->close();
    $conn->close();
}

?>