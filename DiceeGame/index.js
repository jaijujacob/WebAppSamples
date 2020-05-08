var triesCount, playerOneTotal, playerTwoTotal;
resetGame();

function generateRandom(maxNum) {

  return Math.floor(Math.random() * maxNum) + 1
}

function rollDicee() {
  var randomNumberfirst = generateRandom(6); //1-6
  var randomDiceImage = "dice" + randomNumberfirst + ".png"; //dice1.png - dice6.png
  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);
  var randomNumberSecond = generateRandom(6);
  var randomImageSource2 = "images/dice" + randomNumberSecond + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  if (triesCount === 10) {
    //If player 1 wins
    displayResults(playerOneTotal, playerTwoTotal);
    resetGame();

  }
  else {
    triesCount++;
    playerOneTotal += randomNumberfirst;
    playerTwoTotal += randomNumberSecond;
    document.querySelector(".playerOne").innerHTML = "Player One : " + playerOneTotal;
    document.querySelector(".playerTwo").innerHTML = "Player One : " + playerTwoTotal;
  }
}

function resetGame() {
  triesCount = 0;
  playerOneTotal = 0;
  playerTwoTotal = 0;
}

function displayResults(playerOneTotal, playerTwoTotal) {
  if (playerOneTotal > playerTwoTotal) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (playerTwoTotal > playerOneTotal) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

