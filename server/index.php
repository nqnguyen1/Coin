<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// API Key (Set this to a secure value)
$valid_api_key = "ab301ece-c99b-486c-9785-9871d9c034a1";

// Check if the API key is provided in the request
if (!isset($_GET['api_key']) || $_GET['api_key'] !== $valid_api_key) {
    die(json_encode(['error' => 'Unauthorized access']));
}

// Database credentials
$host = 'localhost';
$username = 'ngnguyen';
$password = 'k7,Ts`A%@6b7';
$database = 'Testing';

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['error' => "Connection failed: " . $conn->connect_error]));
}

// Fetch data from database
$sql = "SELECT * FROM updated_inventory";
$result = $conn->query($sql);

$data = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    die(json_encode(['error' => "Query execution failed: " . $conn->error]));
}

// Set headers for JSON response
header('Content-Type: application/json; charset=utf-8');

// Output the JSON data
echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

// Close database connection
$conn->close();
exit;
?>
