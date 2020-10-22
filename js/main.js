"use strict";

const input = document.querySelector(".js-input");
const btn = document.querySelector(".js-button");
const clues = document.querySelector(".js-clues");
const attempts = document.querySelector(".js-attempts");
const random = getRandomNumber(100);
console.log("Mi número aleatorio es " + random);

function getRandomNumber(max) {
  const random = Math.ceil(Math.random() * max);
  return random;
}

let winner = false;

function updateClick() {
  const inputValue = parseInt(input.value);
  input.innerHTML = inputValue;
  updateAttempts();
  if (inputValue < 1 || inputValue > 100) {
    clues.innerHTML = "El número debe estar entre 1 y 100.";
  } else if (inputValue === random) {
    winner = true;
    clues.innerHTML = "¡Has ganado campeona!";
  } else if (inputValue > random) {
    clues.innerHTML = "Pista: Demasiado alto.";
  } else {
    clues.innerHTML = "Pista: Demasiado bajo.";
  }
}

let numberAttempts = 0;

function updateAttempts() {
  if (winner === false) {
    numberAttempts += 1;
    attempts.innerHTML = "Número de intentos: " + numberAttempts;
  }
}
btn.addEventListener("click", updateClick);
