<?PHP
if (isset($_POST['Name'])) {$Name = $_POST['Name']; if ($Name == '' || $Name == 'ФИО') {unset($Name);}}
if (isset($_POST['Email'])) {$Email = $_POST['Email']; if ($Email == '' || $Email == 'E-mail') {unset($Email);}}
if (isset($_POST['Company'])) {$Company = $_POST['Company']; if ($Company == '' || $Company == 'Компания') {unset($Company);}}
if (isset($_POST['Phone'])) {$Phone = $_POST['Phone']; if ($Phone == '' || $Phone == 'Телефон') {unset($Phone);}}

if (isset($Name) && isset($Email) && isset($Phone) && isset($_FILES['Filework'])){

    $from=$_POST['Email'];
    $body0="Новое резюме кандидата - yuppie.city<br/><br/>Имя: $Name <br/>E-mail: $Email <br/>Телефон: $Phone <br/></body></html>"; // сообщение всем
    $filename='';
    if(isset($_FILES['Filework']))
    {
        $mURL       =$_FILES['Filework']['tmp_name'];
        $mURL_type  =$_FILES['Filework']['type'];
        $filename   =$_FILES['Filework']['name'];
        if(isset($mURL_type) && ($mURL_type!=''))
        {
            $nname=session_save_path().'/'.$filename;
            @unlink($nname);
            if( move_uploaded_file($mURL, $nname));
        }
        else {
            echo '
            <meta http-equiv="refresh" content="3;URL=index.html">
            <title>Ошибка отправки сообщения | Yuppie Marketing</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" type="text/css" href="css/style.css">
            <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
            <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
            <script src="js/bootstrap.min.js" type="text/javascript"></script>
            <script src="js/jquery.min.js" type="text/javascript"></script>
            <script src="js/scripts.js" type="text/javascript"></script>

            <style type="text/css">
                @font-face {
                font-family:VEGeorgianBrushCyrillicGreek;
                src:url(fonts/VEGeorgianBrushCyrillicGreek.ttf);
            }
            </style>    
            <body style="margin:0">
                <div style="position:absolute; top:0; left:0;width:100%; height:100%; background:url(img/logo.png) no-repeat;background-position:center; background-size:50%;">
                    <div style="background:rgba(255,255,255,.2);width:100%; height:100%; position:absolute; top:0; left:0;">
                        <div style="margin:0 auto; min-width:300px; width:300px; background:rgba(0,0,0,.8); background-size: 200%; margin-top:200px; box-shadow: 0 0 10px rgba(0,0,0,1); border-radius:3px; text-align:center">
                            <p style="font-size:24px; font-family:VEGeorgianBrushCyrillicGreek; padding:20px; color:rgba(237,84,84,1); padding:20px;">Заполнены не все поля!</p>
                        </div>
                    </div>
                </div>
            </body>
            ';
            die("".$mURL." ".$nname);          
        }
    }else 
    {
        $filename='';
    }
    if($filename){
        $bound="htmlweb.ru-".rand(1000,99999);
        $headers="From: <$from>\n";
        $headers.="Mime-Version: 1.0\n";
        $headers.="Content-Type: multipart/mixed; boundary=\"$bound\"\n";
        $body="--$bound\n";
        $body.="Content-type: text/html; charset=\"utf-8\"\n";
        $body.="Content-Transfer-Encoding: 8bit\n\n";
        $body.=$body0;
        $body.="\n\n--$bound\n";
        $body.="Content-Type: application/octet-stream; name=\"".$filename."\"\n";
        $body.="Content-Transfer-Encoding:base64\n";
        $body.="Content-Disposition: attachment; filename=\"".$filename."\"\n\n";
        $body.=chunk_split(base64_encode(file_get_contents($nname)))."\n";
        $body.="--$bound--\n\n";
    }
    else {
        $headers="From: <".$from.">\nContent-Type: text/html; charset=utf-8"; $body=$body0;
    }

    if(mail('info@yuppie.city', 'Новое резюме кандидата', $body, $headers)==true)
    {
        echo '
            <meta http-equiv="refresh" content="3;URL=index.html">
            <title>Резюме отправлено | Yuppie Marketing</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" type="text/css" href="css/style.css">
            <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
            <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
            <script src="js/bootstrap.min.js" type="text/javascript"></script>
            <script src="js/jquery.min.js" type="text/javascript"></script>
            <script src="js/scripts.js" type="text/javascript"></script>

            <style type="text/css">
                @font-face {
                font-family:VEGeorgianBrushCyrillicGreek;
                src:url(fonts/VEGeorgianBrushCyrillicGreek.ttf);
            }
            </style>     
            <body style="margin:0">
                <div style="position:absolute; top:0; left:0;width:100%; height:100%; background:url(img/logo.png) no-repeat;background-position:center; background-size:50%;">
                    <div style="background:rgba(255,255,255,.2);width:100%; height:100%; position:absolute; top:0; left:0;">
                        <div style="margin:0 auto; min-width:300px; width:300px; background:rgba(0,0,0,.8); background-size: 200%; margin-top:200px; box-shadow: 0 0 10px rgba(0,0,0,1); border-radius:3px; text-align:center">
                            <p style="font-size:24px; font-family:VEGeorgianBrushCyrillicGreek; padding:20px; color:white; padding:20px;">Ваше резюме отправлено!</p>
                        </div>
                    </div>
                </div>
            </body>
            ';
    }
    else {

    }
}
else {
    echo '
            <meta http-equiv="refresh" content="3;URL=index.html">
            <title>Ошибка отправки сообщения | Yuppie Marketing</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" type="text/css" href="css/style.css">
            <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
            <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
            <script src="js/bootstrap.min.js" type="text/javascript"></script>
            <script src="js/jquery.min.js" type="text/javascript"></script>
            <script src="js/scripts.js" type="text/javascript"></script>

            <style type="text/css">
                @font-face {
                font-family:VEGeorgianBrushCyrillicGreek;
                src:url(fonts/VEGeorgianBrushCyrillicGreek.ttf);
            }
            </style>    
            <body style="margin:0">
                <div style="position:absolute; top:0; left:0;width:100%; height:100%; background:url(img/logo.png) no-repeat;background-position:center; background-size:50%;">
                    <div style="background:rgba(255,255,255,.2);width:100%; height:100%; position:absolute; top:0; left:0;">
                        <div style="margin:0 auto; min-width:300px; width:300px; background:rgba(0,0,0,.8); background-size: 200%; margin-top:200px; box-shadow: 0 0 10px rgba(0,0,0,1); border-radius:3px; text-align:center">
                            <p style="font-size:24px; font-family:VEGeorgianBrushCyrillicGreek; padding:20px; color:rgba(237,84,84,1); padding:20px;">Заполнены не все поля!</p>
                        </div>
                    </div>
                </div>
            </body>
            ';
}

    if(isset($nname))@unlink($nname);
?>