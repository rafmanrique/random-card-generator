/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Functions that generate random suits and numbers:
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function randomSuitGenerator() {
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    return randomSuit;
  }

  function randomNumberGenerator() {
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return randomNumber;
  }

  let body = document.querySelector("body");

  // Creating Elements:
  let topSuit = document.createElement("div");
  topSuit.setAttribute("id", "topSuit");
  let tSuit = document.createElement("span");
  let number = document.createElement("div");
  number.setAttribute("id", "number");
  let cValue = document.createElement("span");
  let bottomSuit = document.createElement("div");
  bottomSuit.setAttribute("id", "bottomSuit");
  let bSuit = document.createElement("span");

  // Appending Childs:
  let card = document.getElementById("card");
  card.appendChild(topSuit);
  card.appendChild(number);
  card.appendChild(bottomSuit);
  topSuit.appendChild(tSuit);
  number.appendChild(cValue);
  bottomSuit.appendChild(bSuit);

  // Body Styles:
  body.style.background = "green";
  body.style.display = "flex";
  body.style.justifyContent = "center";

  // Card Styles:
  card.style.background = "white";
  card.style.width = "420px";
  card.style.height = "600px";
  card.style.marginTop = "50px";
  card.style.borderRadius = "20px";
  card.style.gap = "83px";

  // Calling function for random suits and numbers:
  tSuit.innerHTML = bSuit.innerHTML = randomSuitGenerator();
  cValue.innerHTML = randomNumberGenerator();

  // Top Suit Styles:
  topSuit.style.fontSize = "100px";
  tSuit.style.marginLeft = "30px";
  tSuit.style.fontFamily = "times new roman";
  tSuit.classList.add(
    `${tSuit.innerHTML == "♥" || tSuit.innerHTML == "♦" ? "red" : "black"}`
  );
  bSuit.classList.add(
    `${bSuit.innerHTML == "♥" || bSuit.innerHTML == "♦" ? "red" : "black"}`
  );

  // Bottom Suit Styles:
  bottomSuit.style.fontSize = "100px";
  bSuit.style.marginLeft = "321px";
  bSuit.style.fontFamily = "times new roman";

  // Number Styles:
  number.style.fontSize = "200px";
  number.style.fontFamily = "times new roman";
  number.style.display = "flex";
  number.style.justifyContent = "center";
};
