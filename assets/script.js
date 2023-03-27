let userAddTask = $("textarea");

$(document).ready(function () {
  // current day and time of user when accessing page
  let secondCounts = () => {
    let currentDay = $("#currentDay");
    const timeOfDay = moment().format("🕐" + " dddd, MMMM Do YYYY, h:mm:ss a");
    currentDay.text(timeOfDay);
  };
  secondCounts();
  setInterval(() => {
    secondCounts();
  },

    1000);

  // checks the time on planner 
  userAddTask.each(function () {
    let hourOfDay = parseInt($(this).attr("hourOfDay"));
    console.log(this);
    let currentHour = moment().hour();

    // check to see what events are considered past, present, or future to color correct the times
    if (hourOfDay === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    }

    if (hourOfDay < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }

    if (hourOfDay > currentHour) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");

    }

  });

  // save btn listener from user to save in local storage
  $(".saveBtn").on("click",

    function () {
      var userTextBox = $(this).siblings(".userTextBox").val();

      var theTime = $(this).parent().attr("id");

      localStorage.setItem(theTime, userTextBox);

    });

  // checks the hours and see if user inputed information then saves that info in local storage
  $("#9AM .userTextBox").val(localStorage.getItem(9));
  $("#10AM .userTextBox").val(localStorage.getItem(10));
  $("#11AM .userTextBox").val(localStorage.getItem(11));
  $("#12PM .userTextBox").val(localStorage.getItem(12));
  $("#1PM .userTextBox").val(localStorage.getItem(13));
  $("#2PM .userTextBox").val(localStorage.getItem(14));
  $("#3PM .userTextBox").val(localStorage.getItem(15));
  $("#4PM .userTextBox").val(localStorage.getItem(16));
  $("#5PM .userTextBox").val(localStorage.getItem(17));


});


