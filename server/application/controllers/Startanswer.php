<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// $conf = mysql_connect("localhost","root","168168"); 
// mysql_query('set names utf8');	
// mysql_select_db('dati',$conf);

// $id = json_decode($_POST['id'],true);


// function A($id){
// $res = mysql_query("select * from question where id = $id");

// 		$rebosed = array();
// 	while ($rec = mysql_fetch_array($res)) {
// 		// header("Content-Type:application/json");
		
// 		$rebosed[0] = $rec[1];
// 		$rebosed[1] = $rec[2];
// 		$rebosed[2] = $rec[4];
// 		print_r($rebosed);

// 	}
// }
// use \QCloud_WeApp_SDK\Mysql\Mysql as DB;

// A($id);
// $res = DB::row('cSessionInfo', ['*'], ['open_id' => 'o6zgf5SxELDjFKOuf_pGaKbKp1YU']);

// $conf = mysql_connect("localhost","root","root8080");
// if ($conf) {
// 	echo "hello world!";
// }
// else{
// 	echo "unconnect!";
// }

class Startanswer extends CI_Controller {
        public function index() {
      echo "Hello world";
      } 
    // public function comments() {
    //   $conf = mysql_connect("localhost","root","root8080");
    //     if ($conf) {
    //       echo "hello world!";
    //     }
    //     else{
    //       echo "unconnect!";
    //     }
        
    //     }

}






?>