// set up of clock and how its shown

$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

// change text color to red if it is an odd minute, and to another color if its an even minute

    changeFontColor(s);

    m = checkTime(m);
    s = checkTime(s);

    $("#clock").html(h + ":" + m + ":" + s);

// millseconds
    setTimeout(startTime, 500);
  }

// add zero in front of numbers < 10

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }

    return i;
  }

// calculates the remainder of a division operation
// In this case, it calculates remainder of i divided by 2
// If i is odd number, the result will be 1 and if it is an even number, the result will be 0. 
// So this if statement checks to see if i is an even number

  function changeFontColor(i) {
    if (i % 2 === 1) { // odd
      $("body").css("color", "red");
    } else { // even
      $("body").css("color", "yellow");
    }
  }

  // alternate the background color (between two different colors) every 5 minutes.

  function changeBackgroundColor() {
    var currentBackgroundColor = $("body").css("backgroundColor");

    if (currentBackgroundColor === "rgb(255, 127, 80)") {
      $("body").css("backgroundColor", "blue");
    } else {
      $("body").css("backgroundColor", "green");
    }

// 5 minutes = 300000 milliseconds

    setTimeout(changeBackgroundColor, 300000);
  }

  //  Change the font size to a different value every hour, selected from an array of font sizes

  var counter = 0;

  function changeFontSize() {
    var fontSizes = ["35px", "22px", "8px", "16px"];

    $("body").css("fontSize", fontSizes[counter]);

    counter = counter + 1;
    if (counter > 3) {
      counter = 0;
    }
    
// 1 hour = 3600000 milliseconds

    setTimeout(changeFontSize, 3600000);
  }

  // function changeFontSizeAlternative() {
  //   var fontSizes = ["40px", "14px", "16px", "20px"];
  //   var randomNumber = Math.floor(Math.random() * 4);

  //   $("body").css("fontSize", fontSizes[randomNumber]);

  //   setTimeout(changeFontSizeAlternative, 5000); // should be 1 hour, but this is easier to test
  // }

  startTime();
  changeBackgroundColor();
  changeFontSize();
  // changeFontSizeAlternative();
});
