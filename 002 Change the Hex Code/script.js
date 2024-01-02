"use strict";
const body = document.querySelector("body");
const button = document.querySelector(".btn");
const hexNumbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

button.addEventListener("click", function () {
  let hexCode = "";

  for (let i = 0; i < 6; i++) {
    let hexIndex = Math.trunc(Math.random() * hexNumbers.length);
    hexCode += hexNumbers[hexIndex];
  }

  body.style.backgroundColor = `#${hexCode}`;

  // Turn Button To Hex Code Text
  button.textContent = `#${hexCode}`;
});
