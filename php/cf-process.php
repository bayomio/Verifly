<?php
$name = $_POST["cfName"];
$email = $_POST["cfEmail"];
$website = $_POST["cfWebsite"];
$subject = $_POST["cfSubject"];
$message = $_POST["cfMessage"];
 
$EmailTo = "moradxd@gmail.com";
$Subject = "Bright - Startup Landing Page";
 
// prepare email body text
$Body = "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Website: ";
$Body .= $website;
$Body .= "\n";
 
$Body .= "Subject: ";
$Body .= $subject;
$Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>