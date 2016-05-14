<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="./jquery.min.js"></script>
  <script src="./bootstrap.min.js"></script>
  <script>
    $(document).ready(function(){
      $("#OK_btn").click(function(){
        var month = parseInt(document.getElementById('MonthSel').value, 10);
        if (month < 1 || month > 12 || typeof month !== 'number') {
          alert('Month out of range: ' + typeof month);
        } else {
          $("#calandar").load('./calandar.php?month=' + month);
        }
      });
      $("#calandar").load('./calandar.php');
    });
  </script>
  <style>
  table.calendar		{ border-left:1px solid #999; }
  tr.calendar-row	{  }
  td.calendar-day	{ min-height:80px; font-size:11px; position:relative; } * html div.calendar-day { height:80px; }
  td.calendar-day:hover	{ background:#B8B9CF; }
  td.calendar-day-np	{ min-height:80px; } * html div.calendar-day-np { height:80px; }
  td.calendar-day-head { background:#999; font-weight:bold; text-align:center; width:80px; padding:5px; border-bottom:1px solid #999; border-top:1px solid #999; border-right:1px solid #999; }
  div.day-number		{ background:#999; padding:5px; color:#fff; font-weight:bold; float:right; margin:-5px -5px 0 0; width:20px; text-align:center; }
  td.calendar-day, td.calendar-day-np { width:80; padding:5px; border-bottom:1px solid #999; border-right:1px solid #999; }
  </style>
  <link rel="stylesheet" href="./bootstrap.min.css">
</head>

<body>
  <div class="row">
    <div class="col-xs-9 col-sm-3">
        <h5>Month:</h5>
        <input id="MonthSel" type="text">
        <button id="OK_btn" type="button" class="btn btn-default">OK</button>
    </div>
    <div class="col-xs-10 col-sm-9">
      <div id="calandar"></div>
    </div>
  </div>
</body>
</html>
