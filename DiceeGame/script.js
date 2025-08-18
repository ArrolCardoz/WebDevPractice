var randomNumber1 = Math.random() * 6;
var randomNumber2 = Math.random() * 6;

randomNumber1 = Math.floor(randomNumber1 + 1);
randomNumber2 = Math.floor(randomNumber2 + 1);

//debug
// console.log(randomNumber1);
// console.log("images/dice" + String(randomNumber1) + ".png");

var dice1 = document.querySelector("img.img1");
var dice2 = document.querySelector("img.img2");
// var str1 = "images/dice" + "1" + ".png";

// document.getElementById("img1").src = str1;

// dice.src = "images/dice" + String(randomNumber1) + ".png";
dice1.src = "images/dice" + String(randomNumber1) + ".png";

dice2.src = "images/dice" + String(randomNumber2) + ".png";

var result = document.querySelector("h1");
if (randomNumber1 > randomNumber2) result.textContent = "🚩 Player 1 Wins!";
else if (randomNumber1 < randomNumber2)
  result.textContent = "Player 2 Wins! 🚩";
else result.textContent = "Draw!";
