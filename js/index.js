$(document).ready(function(){
  $("#OK_btn").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var month = parseInt(document.getElementById('MonthSel').value, 10);
    if (month < 1 || month > 12 || isNaN(month)) {
      alert('Month out of range: ' + month);
      $('#calendar').html('');
    } else {
      $("#calendar").load('./calendar.php?month=' + month);
    }
  });
  $("#Next_btn").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var month = parseInt(document.getElementById('MonthSel').value, 10);
    if (month >= 1 && month < 12) {
      month += 1;
    } else if (month == 12) {
      month = 1;
    }
    document.getElementById('MonthSel').value = month;
    $("#calendar").load('./calendar.php?month=' + month);
  });
  $("#Prev_btn").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var month = parseInt(document.getElementById('MonthSel').value, 10);
    if (month > 1 && month <= 12) {
      month -= 1;
    } else if (month == 1) {
      month = 12;
    }
    document.getElementById('MonthSel').value = month;
    $("#calendar").load('./calendar.php?month=' + month);
  });
  $("#mod-add-one").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var ClickedDay = $("#ModalText").data("current-date");
    // var ClickedDayValue = $("#ModalText").data("current-value");
    // load php that will update DB
    $.ajax({
      url: "./update.php?date=" + ClickedDay
    }).done(function(data) {
      // refresh calendar
      var Tmonth = document.getElementById('MonthSel').value;
      $("#calendar").load('./calendar.php?month=' + Tmonth);
    });
  });

  $("#mod-ok").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var ClickedDay = $("#ModalText").data("current-date");
    var NewCount = $("#mod-start-value").val();
    // var ClickedDayValue = $("#ModalText").data("current-value");
    // load php that will update DB
    $.ajax({
      url: "./update.php?date=" + ClickedDay + "&newcount=" + NewCount
    }).done(function(data) {
      // refresh calendar
      var Tmonth = document.getElementById('MonthSel').value;
      $("#calendar").load('./calendar.php?month=' + Tmonth);
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
//  Main
  var d = new Date();
  var month = d.getMonth() + 1;
  document.getElementById('MonthSel').value = month;
  $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
  $("#calendar").load('./calendar.php?month=' + month);
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
