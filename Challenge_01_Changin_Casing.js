let randomenumber1 = Math.floor(Math.random() * 6) + 1;
let randomImageSource = "images1/dice" + randomenumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images1/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomenumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "❤️Play 1 Wins";
} else if (randomNumber2 > randomenumber1) {
  document.querySelector("h1").innerHTML = "❤️Play 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "😎Is Equal ";
}
