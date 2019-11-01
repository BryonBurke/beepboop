$(document).ready(function() {
  $('form#numInputForm').submit(function(event) {
    event.preventDefault();

    // Get user input
        var userNumInt = parseInt($("#userNumEntry").val());



    // apply rules and return a list of numbers from 0 to the users inputted number
        var outNum = 11;


        for (var i =0; i < userNumInt; i++){

          iArray = [i].toString('');
          var iArraySplit = iArray.split('');

          if (iArraySplit.includes("1")){
            console.log("beep");
          }
          else {
            console.log(iArray);
          }



        }














  });



});
