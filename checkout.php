<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "kaizen"; 


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $address = $_POST['address'];
    $mobileNumber = $_POST['mobileNumber'];
    $paymentOption = $_POST['paymentOption'];

    
    $paymentValue = ($paymentOption === 'visaMasterCard') ? 'CARD' : 'COD';

    
    $sql = "INSERT INTO orders (F_name, L_name, Address, Mobile, OPT) VALUES ('$firstName', '$lastName', '$address', '$mobileNumber', '$paymentValue')";

    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Order</title>
        <link rel='stylesheet' type='text/css' href='phpstyle.css'>
    </head>
    <body>";

    if (mysqli_query($conn, $sql)) {
        echo "<div class='successmsg'>
                <img id='orderimg' src='Images/order.png' alt='order ico'>
                <p class='succ'>Order placed successfully!</p>
                <a class='return' href='homepage.html'>Return to Home</a>
            </div>";
    } else {
        echo "<div class='errormsg'>Error:" . $sql . "<br>" . mysqli_error($conn)."</div>";
    }
    echo "</body>
    </html>";
}

mysqli_close($conn);
?>
