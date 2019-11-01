$(document).ready(function() {
  $('form#numInputForm').submit(function(event) {
    event.preventDefault();

// Get user input
    var userNumInt = parseInt($("#userNumEntry").val());
    var userNumString = $("#userNumEntry").val();
    var userNumStringSplit = userNumString.split('');

    console.log(userNumStringSplit);
// return a range of numbers from 0 to the users inputted number

    var outNum = 1;

    // var splitStringNumArray = stringNumArray.split()



    for (var i =0; i < userNumInt; i++){


      console.log(outNum);

      outNum ++
    }














  });



});
