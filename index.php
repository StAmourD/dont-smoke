<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="./jquery.min.js"></script>
  <script src="./bootstrap.min.js"></script>
  <script src="./js/index.js"></script>
  <link rel="stylesheet" href="./cal.css">
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
          <div class="col-xs-12 col-md-9 text-center">
            <span id="calendar" class=""></span>
          </div>
          <div class="col-xs-12 col-md-3">
            <div class="input-group">
              <input type="text" class="form-control" id="MonthSel">
              <span class="input-group-btn">
                <button id="OK_btn" type="button" class="btn btn-default">OK</button>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-9 text-center">
            <div class="btn-group">
              <button id="Prev_btn" type="button" class="btn btn-default">« Prev</button>
              <button id="Next_btn" type="button" class="btn btn-default">Next »</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div data-toggle="modal" data-target="#myModal"></div>
    <div class="modal fade" id="myModal" role="dialog"><!-- Modal -->
      <div class="modal-dialog">
        <div class="modal-content"><!-- Modal content-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Change Number</h4>
          </div>
          <div class="modal-body">
            <div id="ModalText"></div>
            <button id="mod-add-one" type="button" class="btn btn-primary" data-dismiss="modal">Add One</button>
            <button id="mod-clear" type="button" class="btn btn-primary">Clear</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div><!-- Modal content-->
      </div>
    </div><!-- Modal -->
  </div>

</body>
</html>
