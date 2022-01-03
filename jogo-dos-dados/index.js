var numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
var srcAleatoria =  "images/dice" + numeroAleatorio1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", srcAleatoria);

// DADO 2

var numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;
var srcAleatoria2 =  "images/dice" + numeroAleatorio2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", srcAleatoria2);

if (numeroAleatorio1 > numeroAleatorio2) {
  document.querySelector("h1").innerHTML = "🚩 Jogador 1 ganhou";
}
else if (numeroAleatorio1 < numeroAleatorio2) {
  document.querySelector("h1").innerHTML = "Jogador 2 ganhou 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Empate!";
}
