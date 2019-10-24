<?php
$recepient = "name671@inbox.ru";
$sitename = "soundcityby";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$subject = trim($_POST["subject"]);

$thm  = 'Заказ звонка';
$thm  = "=?utf-8?b?". base64_encode($thm) ."?=";

$headers = "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: <soundcitystudio.by>\r\n"; 
$headers .= "Reply-To: soundcitystudio.by\r\n";

$message = "<table>
               <tr>
                <td>Имя: $name</td>
               </tr>
               <tr>
                <td>Телефон: $phone</td>
               </tr>
               <tr>
                <td>Телефон: $subject</td>
               </tr>
             </table>";
             
$pagetitle = "Новая заявка с сайта \"$sitename\"";


if(mail($recepient, $thm, $message, $headers, '-fpostmaster@soundcitystudio.by')){
  echo $response = 'Сообщение отправлено';
}else
  echo $response = 'Ошибка при отправке';
