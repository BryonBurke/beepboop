$(document).ready(function() {
  $('form#numInputForm').submit(function(event) {
    event.preventDefault();
     $(".replyToInput").show();

     // Business Logic

     function makeResult (userNumInt){

       var resultArray = []

       for (var i =0; i <= userNumInt; i++){
         iArray = [i].toString('');
         var iArraySplit = iArray.split('');
         if  (  iArray === "13"   ) {
           resultArray.push(" I'm sorry, Dave. I'm afraid I can't do that.");
         }
         else if  (  iArray === "21"   ) {
           resultArray.push(" I'm sorry, Dave. I'm afraid I can't do that.");
         }
         else if (iArraySplit.includes("3")){
           resultArray.push(" I'm sorry, Dave. I'm afraid I can't do that.");
         }
         else if (iArraySplit.includes("2")){
           resultArray.push(" boop!");
         }
         else if (iArraySplit.includes("1")){
           resultArray.push(" beep!");
         }
         else {
           resultArray.push( i );
         }
         var result = resultArray.toString();
       } return result;
     }

    // User Interface logic

     // Get user input
     var userNumInt = parseInt($("#userNumEntry").val());
     // call business logic function for results
     var result = makeResult(userNumInt);
     // Output results
     document.getElementById("output").innerHTML = result;
   });
 });
