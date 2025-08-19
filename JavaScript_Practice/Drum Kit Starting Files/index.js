var arrButton = document.querySelectorAll("button");

for (var i = 0; i < arrButton.length; i++) {
  arrButton[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playInstrument(buttonInnerHTML);
    buttonAnimaion(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  playInstrument(event.key);
  buttonAnimaion(event.key);
});

function playInstrument(keyPressed) {
  switch (keyPressed) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(event);
  }
}

function buttonAnimaion(keyPressed) {
  var activeButton = document.querySelector("button." + keyPressed);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
