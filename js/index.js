$(document).ready(function(){
  $("#OK_btn").click(function(){
    var month = parseInt(document.getElementById('MonthSel').value, 10);
    if (month < 1 || month > 12 || isNaN(month)) {
      alert('Month out of range: ' + month);
    } else {
      $("#calandar").load('./calandar.php?month=' + month);
    }
  });
  $("#Next_btn").click(function(){
    var month = parseInt(document.getElementById('MonthSel').value, 10);
    if (month >= 1 && month < 12) {
      month += 1;
     } else if (month == 12) {
       month = 1;
     }
      document.getElementById('MonthSel').value = month;
      $("#calandar").load('./calandar.php?month=' + month);
  });
  $("#Prev_btn").click(function(){
    var month = parseInt(document.getElementById('MonthSel').value, 10);
    if (month > 1 && month <= 12) {
      month -= 1;
    } else if (month == 1) {
      month = 12;
    }
      document.getElementById('MonthSel').value = month;
      $("#calandar").load('./calandar.php?month=' + month);
  });
  $(".calendar-day").click(function(){
    alert("Button id is: " . this.id);
  });
//   main
  var d = new Date();
  var month = d.getMonth() + 1;
  document.getElementById('MonthSel').value = month;
  $("#calandar").load('./calandar.php?month=' + month);
});
