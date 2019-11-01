$(document).ready(function() {
  $('form#numInputForm').submit(function(event) {
    event.preventDefault();
     $(".replyToInput").show();



    // Get user input
        var userNumInt = parseInt($("#userNumEntry").val());

    // apply rules and return a list of numbers from 0 to the users inputted number. use the index for a display counter and compare input for rules

        for (var i =0; i < userNumInt; i++){

          iArray = [i].toString('');
          var iArraySplit = iArray.split('');

          if  (  iArray === "13"   ) {
            console.log("I'm sorry, Dave. I'm afraid I can't do that.");
             $(".result").text("I'm sorry, Dave. I'm afraid I can't do that.");
          }

          else if  (  iArray === "21"   ) {
            console.log("I'm sorry, Dave. I'm afraid I can't do that.");
             $(".result").text("I'm sorry, Dave. I'm afraid I can't do that.");
          }

          else if (iArraySplit.includes("3")){
            console.log("I'm sorry, Dave. I'm afraid I can't do that.");
             $(".result").text("I'm sorry, Dave. I'm afraid I can't do that.");
          }

          else if (iArraySplit.includes("2")){
            console.log("boop");
             $(".result").text("boop");
          }
          else if (iArraySplit.includes("1")){
            console.log("beep");
             $(".result").text("beep.");
          }
          else {
            console.log(i);
             $(".result").text(i.toString());
          }

        }

  });

});
