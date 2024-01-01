"use strict";
let i = 0;
let backgroundColor = "#fff";
let changeColor = document.querySelector("button");
let colors = [
  "#000",
  "#C5E898",
  "#96EFFF",
  "#A25772",
  "#76453B",
  "#525CEB",
  "#FFA732",
  "#711DB0",
  "#65B741",
  "#EF4040",
];

changeColor.addEventListener("click", function () {
  backgroundColor = document.querySelector("body").style.backgroundColor =
    colors[i++];

  if (i > colors.length - 1) {
    i = 0;
  }
});
