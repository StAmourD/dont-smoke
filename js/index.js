$(document).ready(function(){
  $("#OK_btn").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var month = parseInt($("#MonthSel").val(), 10);
    if (month < 1 || month > 12 || isNaN(month)) {
      alert('Month out of range: ' + month);
      $('#calendar').html('');
    } else {
      $("#calendar").load('./calendar.php?month=' + month);
    }
  });
  $("#Next_btn").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var month = parseInt($("#MonthSel").val(), 10);
    if (month >= 1 && month < 12) {
      month += 1;
    } else if (month == 12) {
      month = 1;
    }
    $("#Mon-" + month).trigger('click');
  });
  $("#Prev_btn").click(function(){
    $('#calendar').html('<span class="glyphicon glyphicon-refresh spinning"></span> Loading...');
    var month = parseInt($("#MonthSel").val(), 10);
    if (month > 1 && month <= 12) {
      month -= 1;
    } else if (month == 1) {
      month = 12;
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
      // refresh calendar
      var Tmonth = $("#MonthSel").val();
      $("#calendar").load('./calendar.php?month=' + Tmonth);
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
      // refresh calendar
      var Tmonth = $("#MonthSel").val();
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
      var Tmonth = $("#MonthSel").val();
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

  $(".MonthItem").click(function() {
    $("#MonthSel").val($(this).prop('id').substring(4,6));
    $("#mod-ok").trigger("click");
    $("#month-drop").html($(this).text() + '<span class="caret"></span>');
  });

//  Main
  var d = new Date();
  var month = d.getMonth() + 1;
  $("#MonthSel").val(month);
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
