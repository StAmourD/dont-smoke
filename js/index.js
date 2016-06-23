$(document).ready(function(){
  $("#OK_btn").click(function(){
    UpdateCal();
  });

  $("#Next_btn").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var month = parseInt($("#month-drop").data('selection'), 10);
    var year = parseInt($("#year-drop").data('selection'), 10);
    if (month >= 1 && month < 12) {
      month += 1;
    } else if (month == 12) {
      month = 1;
      year += 1;
      DontUpdate = true;
      $("#Year-" + year).trigger('click');
      DontUpdate = false;
    }
    $("#Mon-" + month).trigger('click');
  });
  $("#Prev_btn").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var month = parseInt($("#month-drop").data('selection'), 10);
    var year = parseInt($("#year-drop").data('selection'), 10);
    if (month > 1 && month <= 12) {
      month -= 1;
    } else if (month == 1) {
      month = 12;
      year -= 1;
      DontUpdate = true;
      $("#Year-" + year).trigger('click');
      DontUpdate = false;
    }
    $("#Mon-" + month).trigger('click');
  });
  $("#mod-add-one").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var ClickedDay = $("#ModalText").data("current-date");
    // load php that will update DB
    $.ajax({
      url: "./update.php?date=" + ClickedDay
    }).done(function(data) {
      UpdateCal();
    });
  });
  $("#mod-add-one-today").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var ClickedDay = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();
    // load php that will update DB
    $.ajax({
      url: "./update.php?date=" + ClickedDay
    }).done(function(data) {
      UpdateCal();
    });
  });
  $("#mod-ok").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var ClickedDay = $("#ModalText").data("current-date");
    var NewCount = $("#mod-start-value").val();
    // load php that will update DB
    $.ajax({
      url: "./update.php?date=" + ClickedDay + "&newcount=" + NewCount
    }).done(function(data) {
      UpdateCal();
      $('#myModal').modal('hide');
    });
  });

  // http://codepen.io/Thomas-Lebeau/pen/csHqx
  (function ($) {
    $('.spinner .btn:first-of-type').on('click', function() {
      $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
    });
    $('.spinner .btn:last-of-type').on('click', function() {
      $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
    });
  })(jQuery);

  $(".MonthItem").click(function() {
    $("#month-drop").data('selection', $(this).prop('id').substring(4,6));
    $("#month-drop").html($(this).text() + '<span class="caret"></span>');
    if (DontUpdate == false) {
      UpdateCal();
    }
  });
  $(".YearItem").click(function(){
    $("#year-drop").data('selection', $(this).prop('id').substring(5,9));
    $("#year-drop").html($(this).text() + '<span class="caret"></span>');
    if (DontUpdate == false) {
      UpdateCal();
    }
  });

//  Main
  var DontUpdate = true;
  var d = new Date();
  var month = d.getMonth() + 1;
  // change to getFullYear()
  var tYear = d.getYear() + 1900;
  $("#year-drop").data('selection', tYear);
  $("#Year-" + tYear).trigger('click');
  $("#month-drop").data('selection', month);
  $("#Mon-" + month).trigger('click');
  UpdateCal();
  DontUpdate = false;
  // jQuerry bind after div change
  $("#calendar").on('click', '.calendar-day', function (){
    DayClicked($(this).prop('id'), $(this).data('value'));
  });
});

function DayClicked(ClickedDayID, CurrentValue) {
  if (CurrentValue == '') {
    CurrentValue = 0;
  }
  $("#ModalText").html("What would you like to do with the count on " + ClickedDayID + "?");
  $("#ModalText").data("current-date", ClickedDayID);
  $("#mod-start-value").val(CurrentValue);
  $('#myModal').modal('show');
}

function UpdateCal(){
  $('#calendar').html('<div class="text-center"><span class="glyphicon glyphicon-refresh spinning"></span> Loading...</div>');
  var month = parseInt($("#month-drop").data('selection'), 10);
  var year = parseInt($("#year-drop").data('selection'), 10);
  if (month < 1 || month > 12 || isNaN(month)) {
    alert('Month out of range: ' + month);
    $('#calendar').html('');
  } else {
    $("#calendar").load('./calendar.php?month=' + month + '&year=' + year);
  }
}
