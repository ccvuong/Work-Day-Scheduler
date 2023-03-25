$(init);

function init() {
  // current day in header area
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // color our time blocks and start interval to re-color every minute
  timeOfDayColors();
  setInterval(timeOfDayColors, 60000);

  // looking out for user input per time of day
  $(".time-of-day").each(function () {
    var userTask = $(this).attr("id");
    $("#" + userTask + " #inputArea").text(localStorage.getItem(moment().format("DDDYYYY") + userTask));
  });

  // looking out for user saving via click with saveGame function below
  $(".saveBtn").on("click", saveGame);
}

function timeOfDayColors() {
  // for each time of day 
  $(".time-of-day").each(function () {

    var theHour = parseInt($(this).attr("id").replace("hour-", ""));
    var presentHour = parseInt(moment().format("H"));

    // clears out events on the planner
    $(this).removeClass("past present future");
    // determines the color of event on planner with CSS
    if (theHour < presentHour) {
      $(this).addClass("past");

    } else if (theHour > presentHour) {
      $(this).addClass("future");

    } else {
      $(this).addClass("present");
    }

  });
};

function saveGame(event) {
  var userAddEvent = $(this).parent().attr("id");
  // saves user input into localstorage
  localStorage.setItem(moment().format("DDDYYYY") + userAddEvent, $("#" + userAddEvent + " #inputArea").val());
};