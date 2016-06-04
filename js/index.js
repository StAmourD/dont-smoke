$(document).ready(function(){
  $("#OK_btn").click(function(){
    var month = parseInt(document.getElementById('MonthSel').value, 10);
    if (month < 1 || month > 12 || isNaN(month)) {
      alert('Month out of range: ' + month);
    } else {
      $("#calendar").load('./calendar.php?month=' + month);
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
    $("#calendar").load('./calendar.php?month=' + month);
  });
  $("#Prev_btn").click(function(){
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
    var ClickedDay = $("#ModalText").data("current-date");
    // load php that will update DB
    $.ajax({
      url: "./update.php?date=" + ClickedDay
    }).done(function(data) {
      console.log(data);
      // refresh calendar
      var Tmonth = document.getElementById('MonthSel').value;
      $("#calendar").load('./calendar.php?month=' + Tmonth);
    });
  });

//   main
  var d = new Date();
  var month = d.getMonth() + 1;
  document.getElementById('MonthSel').value = month;
  $("#calendar").load('./calendar.php?month=' + month);
  // jQuerry bind after div change
  $("#calendar").on('click', '.calendar-day', function (){
    ClickedDay = $(this).prop('id');
    DayClicked(ClickedDay);
  });
});

function DayClicked(ClickedDayID) {
  $("#ModalText").html("What would you like to do with the count on " + ClickedDayID + "?");
  $("#ModalText").data("current-date", ClickedDayID);
}
