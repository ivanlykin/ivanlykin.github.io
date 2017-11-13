<?php
        $from = htmlspecialchars($_POST["Email"]);
        $to = "ivan.lykin@mail.ru";
        $name = htmlspecialchars($_POST["Name"]);
        $phone = htmlspecialchars($_POST["Phone"]);
        $subject = "vioorg.com - Новое резюме кандидата";
        $message = "Новое резюме кандидата<br/><br/>Имя: " .$name. " <br/>E-mail: ".$from. " <br/>Телефон: ".$phone. "<br/>";

        $error_name = "&nbsp;";
        $error_phone = "&nbsp;";
        $error_email = "&nbsp;";
        $error_file = "&nbsp;";
        $successMessage = "&nbsp;";
        $error=false;

        if($from == "" || !preg_match ("/@/", $from) || $from == "E-mail") {
            $error_email = htmlspecialchars("Enter your E-mail");
            $error=true;
        }
        if(strlen($name) == 0 || $name == "Имя") {
            $error_name = "Enter your name";
            $error=true;
        }
        if(strlen($phone) == 0 || preg_match ("/[A-Za-z]/", $phone)) {
            $error_phone = "Enter your phone";
            $error=true;
        }

        $filename='';
        if(isset($_FILES['Filework'])) {        
            $mURL       =$_FILES['Filework']['tmp_name'];
            $mURL_type  =$_FILES['Filework']['type'];
            $filename   =$_FILES['Filework']['name'];
            if(isset($mURL_type) && ($mURL_type!='')) {
                $nname=session_save_path().'/'.$filename;
                @unlink($nname);
                if( move_uploaded_file($mURL, $nname));
            }
            else {
                $error_file="Файл не прикреплен";
                $error=true;
            }
        }else {
            $filename='';
             $error_file="Файл не прикреплен";
             $error=true;
        }

        if($filename){
            $bound="htmlweb.ru-".rand(1000,99999);
            $headers="From: <$from>\n";
            $headers.="Mime-Version: 1.0\n";
            $headers.="Content-Type: multipart/mixed; boundary=\"$bound\"\n";
            $body="--$bound\n";
            $body.="Content-type: text/html; charset=\"utf-8\"\n";
            $body.="Content-Transfer-Encoding: 8bit\n\n";
            $body.=$message;
            $body.="\n\n--$bound\n";
            $body.="Content-Type: application/octet-stream; name=\"".$filename."\"\n";
            $body.="Content-Transfer-Encoding:base64\n";
            $body.="Content-Disposition: attachment; filename=\"".$filename."\"\n\n";
            $body.=chunk_split(base64_encode(file_get_contents($nname)))."\n";
            $body.="--$bound--\n\n";
        }
        else {
            $headers="From: <".$from.">\nContent-Type: text/html; charset=utf-8"; $body=$message;
            $error_file="Файл не прикреплен";
            $error=true;
        }

        if($error==false){
            if(mail($to, 'Новое резюме кандидата', $body, $headers)==true)
            {
                $successMessage="Your message was successfully sent!"; 
            }
            else {
                $successMessage="Oops! Something wrong. Try again.";
            }
        }
        
        $arr = array('n' => $error_name, 'e' => $error_email, 'p' => $error_phone, 'f' => $error_file, 'm' => $successMessage);
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>