<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$name = $data['name'];
$email = $data['email'];
$activity = $data['activity'];
$yes = $data['yes'];

$fname =  'data/' . $name . '.txt';
$fp = fopen($fname, 'w');

$text = $name . PHP_EOL . $email . PHP_EOL . $activity . PHP_EOL . $yes;
$ok = fwrite($fp, $text);
if ($ok) {
    http_response_code(response_code: 200);
    $json = [
        'status' => 200,
        'massage' => 'Success',
        'content' => $data,
    ];
    echo json_encode($json);
} else {
    http_response_code( response_code: 500);
    $json = [
        'status' => 500,
        'massage' => 'Ayayayaya!',
        'content' => $data,
    ];
    echo json_encode($json);
} 


//echo json_encode($data);

// if (isset($_POST["%name%"]) && isset($_POST["%email%"]) && isset($_POST["%activity%"]) && isset($_POST["%yes%"])) {

//     $name = $_POST["%name%"];
//     $email = $_POST["%email%"];
//     $activity = $_POST["%activity%"];
//     $yes = $_POST["%yes%"];

//     $fname =  $name . '.txt';
//     $fp = fopen($fname, 'w');

//     $text = $name . PHP_EOL . $email . PHP_EOL . $activity . PHP_EOL . $yes;

//     $ok = fwrite($fp, $text);
//     if ($ok) {
//         echo 'Данные успешно записаны.';
//     }
//     else {
//         echo 'Ошибка при записи в файл.';
//     }
//     fclose($fp);
//     }
