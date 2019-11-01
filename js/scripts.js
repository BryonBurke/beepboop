$(document).ready(function() {
  $('form#numInputForm').submit(function(event) {
    event.preventDefault();

    // Get user input
        var userNumInt = parseInt($("#userNumEntry").val());
        var userNumString = $("#userNumEntry").val();
        var userNumStringSplit = userNumString.split('');

    console.log(userNumStringSplit);
    // apply rules and return a list of numbers from 0 to the users inputted number
        var outNum = ["0"];

        for (var i =0; i < userNumInt; i++){


    

          console.log(outNum);

          outNum ++
        }














  });



});
