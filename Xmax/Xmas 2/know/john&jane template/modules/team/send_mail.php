<?php


$name =$_POST['name'];
$email =$_POST['mail'];
$msg = $_POST['msg'];
$destin = $_POST['dest'];
$title = $_POST['title'];



function decoder($texte){
	$texte = utf8_decode($texte);
	$texte = stripslashes($texte);
	$texte = trim($texte);
	$texte = htmlentities($texte, ENT_QUOTES);
	$texte = strip_tags($texte);
	$texte = nl2br($texte);
	$texte = str_replace("&gt;", ">", $texte);
	$texte = str_replace("&lt;", "<", $texte);
	return $texte;
}






$sujet = "$title \n";
$message = "Message coming from <b> $name </b>\n";
$message .= "<b>E-mail :</b> $email\n";
$message .= "<b>Message :</b> $msg\n";

$message = decoder($message);

$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: $civil $nom <$email>\n";


$mail_OK=mail($destin, $sujet, $message, $headers) ; 

if ($mail_OK) {
	echo "success";
} else { 
	echo "no-success";
}

?>
