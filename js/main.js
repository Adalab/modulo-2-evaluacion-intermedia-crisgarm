"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
 }

 console.log("Mi número aleatorio es " + getRandomNumber(100));

const input = document.querySelector(".js-input");
const btn = document.querySelector(".js-button");
const clues = document.querySelector(".js-clues");
const attempts = document.querySelector(".js-attempts");

function updateClick(){
  const inputValue = input.value;
  input.innerHTML = inputValue;
  console.log(inputValue);

}



 btn.addEventListener("click", updateClick);