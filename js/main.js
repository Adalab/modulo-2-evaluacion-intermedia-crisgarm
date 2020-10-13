"use strict";

function getRandomNumber(max) {
  const random = Math.ceil(Math.random() * max);
  return random;
 }

const input = document.querySelector(".js-input");
const btn = document.querySelector(".js-button");
const clues = document.querySelector(".js-clues");
const attempts = document.querySelector(".js-attempts");
const random = getRandomNumber(100);
console.log("Mi número aleatorio es " + random);

function updateClick(){
  const inputValue = input.value;
  input.innerHTML = inputValue;
  console.log(inputValue);
  console.log(random);
  updateAttempts();
  if (inputValue < 1 || inputValue > 100){
    clues.innerHTML = "El número debe estar entre 1 y 100."
    console.log(clues);
   }else if (inputValue == random){
    clues.innerHTML = "¡Has ganado campeona!"
    console.log(clues);
   }else if(inputValue > random){
    clues.innerHTML = "Pista: Demasiado alto."
    console.log(clues);
    }else{
    clues.innerHTML = "Pista: Demasiado bajo."
    console.log(clues);
}
}

let numberAttempts = 1;

function updateAttempts(){
  attempts.innerHTML += numberAttempts++;
}

btn.addEventListener("click", updateClick);