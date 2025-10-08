<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name     = trim($_POST['name']);
    $email    = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone    = trim($_POST['phone']);
    $password = trim($_POST['password']);
    $confirm  = trim($_POST['confirm_password']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    if ($password !== $confirm) {
        echo "Passwords do not match.";
        exit;
    }

    $hashed = password_hash($password, PASSWORD_DEFAULT);

    $line = $name . " | " . $email . " | " . $phone . " | " . $hashed . "\n";
    file_put_contents("users.txt", $line, FILE_APPEND);

   echo "<h2>Registration Successful</h2>";
echo "<p>Name: $name</p>";
echo "<p>Email: $email</p>";
echo "<p>Course: $course</p>";

} else {
    echo "Invalid Request Method.";
}

?>
