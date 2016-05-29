<?php
$YOUR_DATABASE_NAME = "php";
$YOUR_MYSQL_QUERY = "SELECT * FROM dontsmoke";
$host="localhost:3306";
$user="root";
$password="#r00tpass2";
$con = new mysqli($host, $user, $password, $YOUR_DATABASE_NAME);
if($con->connect_error) {
  echo mysqli_error($con);
  die('Could not connect: ' . mysqli_error());
} else {
  echo mysqli_error($con);
  echo '<h1>Connected to MySQL</h1>';
  $query = $con->query($YOUR_MYSQL_QUERY);

  if ($query->num_rows > 0) {
    while($row = $query->fetch_assoc()){
      $array[] = $row; }
  }
  array2table($array,600);

  $query->data_seek(0);
  $row = $query->fetch_assoc();
  echo $row["Count"];
  $con->close();
}

//http://php.net/manual/en/function.mysql-fetch-assoc.php
function array2table($arr,$width)
   {
   $count = count($arr);
   if($count > 0){
       reset($arr);
       $num = count(current($arr));
       echo "<table align=\"center\" border=\"1\"cellpadding=\"5\" cellspacing=\"0\" width=\"$width\">\n";
       echo "<tr>\n";
       foreach(current($arr) as $key => $value){
           echo "<th>";
           echo $key."&nbsp;";
           echo "</th>\n";
           }
       echo "</tr>\n";
       while ($curr_row = current($arr)) {
           echo "<tr>\n";
           $col = 1;
           while (false !== ($curr_field = current($curr_row))) {
               echo "<td>";
               echo $curr_field."&nbsp;";
               echo "</td>\n";
               next($curr_row);
               $col++;
               }
           while($col <= $num){
               echo "<td>&nbsp;</td>\n";
               $col++;
           }
           echo "</tr>\n";
           next($arr);
           }
       echo "</table>\n";
       }
   }
?>
