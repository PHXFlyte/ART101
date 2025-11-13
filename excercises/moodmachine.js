function checkMood(score) {
    if (score > 7){
        return "Happy"
/* lmao this shouldn't have worked I got lucky putting the higher if first */
    }
    if (score > 4){
        return "Sad"
    }
    else{
        return "Distracted"
    }

  }

  function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);


    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }

  $("#mood-button").click(function () {
    showMood();
  });