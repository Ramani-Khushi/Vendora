<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
// 1. Sanitize user inputs
$name = htmlspecialchars(trim($_POST['name']));
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$course = htmlspecialchars(trim($_POST['course']));
// 2. Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
die("Invalid email format.");
}
// 3. Store data in a text file
$data = $name . " | " . $email . " | " . $course . "\n";
file_put_contents("registrations.txt", $data, FILE_APPEND);
// 4. Confirm submission


echo "<h2>Registration Successful</h2>";
echo "<p>Name: $name</p>";
echo "<p>Email: $email</p>";
echo "<p>Course: $course</p>";
} else {
echo "Invalid Request Method.";
}
?>