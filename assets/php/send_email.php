<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service']);
    $company = htmlspecialchars($_POST['company']);
    $message = htmlspecialchars($_POST['message']);

    $to = "bhuwansingh886043@gmail.com"; // Replace with your Gmail address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nphone: $phone\nservice: $service\ncompany: $company\nMessage:\n$message";
    $headers = "From: pankaj.k@conformityalliance.in";
    $headers .= "reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/".phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
?>