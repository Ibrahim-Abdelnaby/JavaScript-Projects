"use strict";
const changeColor = document.querySelector(".btn");
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

changeColor.addEventListener("click", function () {
  // let hexCode = "";
  let hexCode = [""];

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.trunc(Math.random() * hexNumbers.length);

    // hexCode += hexNumbers[randomIndex];
    hexCode[randomIndex];
  }

  const hexText = (document.querySelector(
    "body"
  ).style.backgroundColor = `#${hexCode}`);
  changeColor.textContent = hexText;
});
