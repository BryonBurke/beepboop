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

          if  (  iArray === "13"   ) {
            console.log("I'm sorry, Dave. I'm afraid I can't do that.");
          }

          if  (  iArray === "21"   ) {
            console.log("I'm sorry, Dave. I'm afraid I can't do that.");
          }

          else if (iArraySplit.includes("3")){
            console.log("I'm sorry, Dave. I'm afraid I can't do that.");
          }

          else if (iArraySplit.includes("2")){
            console.log("boop");
          }
          else if (iArraySplit.includes("1")){
            console.log("beep");
          }
          else {
            console.log(i);
          }



        }














  });



});
