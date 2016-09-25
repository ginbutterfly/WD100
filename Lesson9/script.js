// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    
    // var fonts = [25px, 15px, 20px, 30px, 22px, 18px, 25px, 15px, 22px, 18px, 30px, 20px]
    
    oddEven(m);

    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);


    $("#txt").html(h + ":" + m + ":" + s + ampm)
    setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }


  }

  function oddEven(i) {
     if (i % 2 === 0) {
        $("#txt").css({ color: "green"});
    } else if (i % 2 ===1) {
        $("#txt").css({ color: "red"});
    }
  }

  function changeBackground() {
    
    var currentBackgroundColor = $("body").css("backgroundColor");
    // background color property 

    if (currentBackgroundColor === "rgb(240, 128, 128)") { // light coral
      $("body").css("backgroundColor", "lightgray");
    } else {
      $("body").css("backgroundColor", "lightcoral");
    }

    setTimeout(changeBackground, 1500000); // 5 minutes
  }

  var counter = 0;
  // sets counter at 0

  function changeFontSize() {
    var fontSizes = ["40px", "14px", "16px", "20px"];
    // font size options

    $("body").css("fontSize", fontSizes[counter]); // changes fontsize to position in array per counter

    counter = counter + 1; // changes counter to next number for next array position
    if (counter > 3) { 
      counter = 0; //array only goes up to 3 so have to change it back to zero
    }
    
    setTimeout(changeFontSize, 5000); // should be 1 hour, but this is easier to test
  }

  startTime();
  changeBackground();
  changeFontSize();
  
});
