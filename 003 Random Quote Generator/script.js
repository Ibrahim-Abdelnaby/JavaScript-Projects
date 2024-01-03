"use strict";
const quoteLabel = document.querySelector(".quote");
const authorLabel = document.querySelector(".author");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  const quotes = {
    "Jules Renard":
      "The truly free man is the one who can turn down an invitation to dinner without giving an excuse.",
    "Albert Einstein":
      "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.",
    "Pierce Brown":
      "Man cannot be freed by the same injustice that enslaved it.",
    "Madeline Miller": "Bury us, and mark our names above. Let us be free.",
  };
  const authors = Object.keys(quotes);
  const author = authors[Math.trunc(Math.random() * authors.length)];
  const quote = quotes[author];
  console.log(quote);
  quoteLabel.textContent = quote;
  authorLabel.textContent = author;
});
