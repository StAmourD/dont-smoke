<?php
  include 'sql.php';

  if (isset($_GET['newcount'])) {
    $newcount = $_GET['newcount'];
  }else{
    $newcount = Null;
  }

  if (isset($_GET['date'])) {
    $date = $_GET['date'];
    $con = open_connection();
    $new_count = set_add_one_single_date($con, $date, $newcount);
    echo $date;
    echo $new_count;
  }else {

  }
 ?>
