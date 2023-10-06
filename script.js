// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var userInput = $('#hour')
var currentDay = $('#currentDay');
var save = $("saveButton");


function saveInput (event) {
  event.preventDefault()
  var clickedSave = $(this).siblings('textarea').val()
  var taskTime = $(this).siblings('textarea').attr('id')
  
  localStorage.setItem(taskTime, clickedSave);
console.log(localStorage)
};

$(function() {
  $('.saveBtn').on('click', saveInput);
  
})


window.onload = function() {
$('textarea').each(function () {
  var id = $(this).attr('id')
  $(this).val(localStorage.getItem(id));

})

}; 




displayTime();
setInterval(displayTime, 1000);

function displayTime() {
  var timeCurrently = dayjs().format('[It is currently] MMM DD, YYYY [at] hh:mm:ss a');
  currentDay.text(timeCurrently);
  $('textarea').each(function () {
    var currentHour = dayjs().format('HH');
    var taskTime = $(this).attr('id');


    if (currentHour == taskTime ) {
      $(this).parent().addClass('present')
      $(this).parent().removeClass('past')
      $(this).parent().removeClass('future')
    
    } else if (currentHour < taskTime) {
      $(this).parent().addClass('future')
      $(this).parent().removeClass('past')
      $(this).parent().removeClass('present')

    } else {
      $(this).parent().addClass('past')
      $(this).parent().removeClass('present')
      $(this).parent().removeClass('future')
    }

  }
  )
}
