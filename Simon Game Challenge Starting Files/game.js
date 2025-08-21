var _buttonColours = ["red", "blue", "green", "yellow"];
var _gamePattern = [];

var _userChosenColour;
var _currentCounter = 0;
var _playersTurn = false;
var _gameOver = true;
var _playingSeq = false;

$(document).keypress(function () {
  if (_gameOver) nextLevel();
});
$(document).click(function () {
  if (_gameOver) nextLevel();
});
$(".btn").click(function () {
  //   console.log("_userChosenColour");

  _userChosenColour = this.id;
  console.log(_playersTurn, !_gameOver);

  if (_playersTurn && !_gameOver && !_playingSeq) {
    _playersTurn = false;
    console.log("test");

    console.log(_userChosenColour, _gamePattern[_currentCounter]);
    clickButton(_userChosenColour);
    if (_userChosenColour == _gamePattern[_currentCounter]) {
      console.log("test---inrement--------");

      _currentCounter++;
      if (_currentCounter >= _gamePattern.length) {
        _playersTurn = false;

        $("h1").text("Nice!!");

        setTimeout(() => {
          nextLevel();
        }, 500);
      }
    } else gameOver();
  }
  //   console.log(_userChosenColour);
});

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4);
  return randomNum;
}

function addRandomColor() {
  _gamePattern.push(_buttonColours[nextSequence()]);
  console.log(_gamePattern.length);
}

function playSequence() {
  $("h1").text("Playing Sequence");
  _playingSeq = true;

  _playersTurn = false;

  for (let i = 0; i < _gamePattern.length; i++) {
    setTimeout(() => {
      clickButton(_gamePattern[i]);
    }, i * 600);
  }
  setTimeout(() => {
    $("h1").text("Repeat Sequence");
    console.log("WHJYYYYYYYYYYYYY");
    _playersTurn = true;
    _playingSeq = false;
  }, _gamePattern.length * 600);
}

function playAudio(color) {
  //   console.log("./sounds/" + color + ".mp3");
  var audio = new Audio("./sounds/" + color + ".mp3");
  audio.play();
}

function gameOver() {
  _playersTurn = false;
  _gamePattern.length = 0;

  $("h1").text("Game Over!!");
  $("body").addClass("game-over");
  playAudio("wrong");

  setTimeout(() => {
    _gameOver = true;

    $("h1").text("Press any button to Start!");
    $("body").removeClass("game-over");
  }, 1000);
}

function nextLevel() {
  _currentCounter = 0;
  _gameOver = false;
  addRandomColor();
  playSequence();
}

function clickButton(color) {
  _playersTurn = false;
  $("." + color).addClass("pressed");
  playAudio(color);

  setTimeout(() => {
    $("." + color).removeClass("pressed");
    if (_currentCounter < _gamePattern.length) _playersTurn = true;
    console.log("TRUEEEEEEEE");
  }, 200);
}
