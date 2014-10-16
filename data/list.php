<?php
$method = $_SERVER['REQUEST_METHOD'];
$json ='[
  {
    "title": "测试1",
    "author": "刘鹏",
    "downloadTime": 67,
    "comment": 1,
    "grade": 1,
    "fav": false,
    "content":"真的是测试我"
  },
  {
    "title": "测试2",
    "author": "刘鹏2",
    "downloadTime": 322,
    "comment": 2,
    "grade": 2,
    "fav": false,
    "content":"真的是测试我2"
  },
  {
    "title": "测试3",
    "author": "刘鹏2",
    "downloadTime": 3,
    "comment": 3,
    "grade": 3,
    "fav": false,
    "content":"真的是测试我2"
  },
  {
    "title": "测试4",
    "author": "刘鹏2",
    "downloadTime": 6,
    "comment": 446,
    "grade": 6,
    "fav": true,
    "content":"真的是测试我2"
  },
  {
    "title": "测试5",
    "author": "刘鹏2",
    "downloadTime": 4,
    "comment": 4,
    "grade": 4,
    "fav": true,
    "content":"真的是测试我2"
  },
  {
    "title": "测试6",
    "author": "刘鹏2",
    "downloadTime": 5,
    "comment": 5,
    "grade": 5,
    "fav": true,
    "content":"真的是测试我2"
  }
]';
if ($method == 'GET') {
 echo $json;
}elseif($method == 'POST'){
  $data = file_get_contents('php://input', 'r');
  $data = json_decode($data,true);
  $title = $data['title'];
  $json2 =  json_decode($json,true);
  for ($i= 0;$i< count($json2); $i++){
    $str= $json2[$i]['title'];
    if ($str ==  $title) {
      foreach($data as $key=>$value){
        $json2[$i][$key] = $value;
      }
      echo json_encode($json2);
    }
  }
}
?>
