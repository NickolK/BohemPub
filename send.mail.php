<?php
// CIEĽOVÝ E-MAIL – sem daj adresu klienta
$to = "373nikol@gmail.com";   // !!! UPRAV !!!

// Dáta z formulára
$from    = isset($_POST['email'])   ? trim($_POST['email'])   : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : 'Správa z kontakt formulára';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Jednoduchá kontrola
if ($from === '' || $message === '') {
    header('Location: kontakt.html?status=error');
    exit;
}

// Text e-mailu
$body  = "Odosielateľ: " . $from . "\n\n";
$body .= "Predmet: " . $subject . "\n\n";
$body .= "Správa:\n" . $message . "\n";

// Hlavičky – From by mala byť adresa z tvojej domény
$headers  = "From: noreply@tvojapubdomena.sk\r\n";  // !!! UPRAV NA SVOJU DOMÉNU !!!
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Odoslanie
$sent = mail($to, "Kontakt formulár – " . $subject, $body, $headers);

// Presmerovanie podľa výsledku
if ($sent) {
    header('Location: kontakt.html?status=ok');
} else {
    header('Location: kontakt.html?status=error');
}
exit;
?>
