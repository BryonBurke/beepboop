$(document).ready(function() {
  $('form#numInputForm').submit(function(event) {
    event.preventDefault();

// Get user input
    var userInputNum = parseInt($("#userNumEntry").val());
// return a range of numbers from 0 to the users inputted number
for (var i =1; i <= userInputNum; i++){

console.log(i);

}














  });



});
