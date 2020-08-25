// Detects Mouse Click.
$(".drum").on("click", function () {
  var key = $(this);
  var button = $(this).text();
  console.log(key);
  // Below function call is called to play sound.
  onClickOrPressed(key);
  // Below function call is called to have animations on clicked button.
  buttonAnimation(button);
});
// Detects Key Board Press.
$(document).on("keydown", function (event) {
  // Below var key has value of the key pressed
  var key = event.key;
  // Below var tag is used to obtain the button tag to get the attribute "id" of it to play sound.
  var tag = $(".drum:contains(" + key + ")");
  // Below function call is called to play sound.
  onClickOrPressed(tag);
  // Below function call is called to have animations on clicked button.
  buttonAnimation(key);
});

// The function below takes a key as parameter which is the button tag, using button tag's id we play the sound.

function onClickOrPressed(key) {
  var sound = $(key).attr("id");
  console.log(sound);
  var audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();
}

// The function below is used for animation to be added and removed when a particular button is pressed and released.
function buttonAnimation(button) {
  $("." + button).addClass("pressed");

  setTimeout(function () {
    $("." + button).removeClass("pressed");
  }, 200);
}
