<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="./jquery.min.js"></script>
  <script src="./bootstrap.min.js"></script>
  <script src="./js/index.js"></script>
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
  <div class="container">
    <ul class="nav nav-tabs">
      <li ><a data-toggle="tab" href="#home">Home</a></li>
      <li class="active"><a data-toggle="tab" href="#cal">Calendar</a></li>
    </ul>
    <div class="tab-content">
      <div id="home" class="tab-pane fade">
        <h3>HOME</h3>
        <p>This is a test.</p>
      </div>
      <div id="cal" class="tab-pane fade in active">
        <div class="row">
          <div class="col-xs-9 col-sm-3">
              <h5>Month:</h5>
              <input id="MonthSel" type="text">
              <button id="OK_btn" type="button" class="btn btn-default">OK</button>
              <button id="Prev_btn" type="button" class="btn btn-default">Prev</button>
              <button id="Next_btn" type="button" class="btn btn-default">Next</button>
          </div>
          <div class="col-xs-10 col-sm-9">
            <div id="calandar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
