"use strict";

const user = document.getElementById("user");
const userPassword = document.getElementById("user-password");
const iris1 = document.getElementById("iris1");
const iris2 = document.getElementById("iris2");
const eyecheck = document.getElementById("eyeCheck");
const leftEyelid = document.getElementById('leftEyelid');
const rigthEyelid = document.getElementById('rigthEyelid');

/*Eventos*/

user.addEventListener("input", () => {
  const size = user.value.length;

  const isStart = size > 0 && size <= 5;
  const isLeft = size > 5 && size <= 10;
  const isMiddle = size > 10 && size <= 15;
  const isRight = size > 15 && size <= 20;
  const isEnd = size > 20;

  if (isStart) {
    iris1.classList.add("change");
    iris1.style.left = "3px";
    iris2.classList.add("change");
    iris2.style.left = "3px";
  } else if (isLeft) {
    iris1.style.left = "2.5px";
    iris2.style.left = "2.5px";
  } else if (isMiddle) {
    iris1.style.left = "2px";
    iris2.style.left = "2px";
  } else if (isRight) {
    iris1.style.left = "1.5px";
    iris2.style.left = "1.5px";
  } else if (isEnd) {
    iris1.style.left = "1px";
    iris2.style.left = "1px";
  } else {
    iris1.classList.remove("change");
    iris1.style.left = "2px";
    iris2.classList.remove("change");
    iris2.style.left = "2px";
  }
});

user.addEventListener("blur", () => {
  iris1.classList.remove("change");
  iris1.style.left = "2px";
  iris2.classList.remove("change");
  iris2.style.left = "2px";
});

userPassword.addEventListener("focus", () => {
  leftEyelid.style.visibility = "visible";
  rigthEyelid.style.visibility = "visible";
});

userPassword.addEventListener("blur", () => {
  leftEyelid.style.visibility = "hidden";
  rigthEyelid.style.visibility = "hidden";
});

/*Funciones*/

function borrar() {
  user.value = "";
}

function borrarPass() {
  userPassword.value = "";
}

let show = true;

function check() {
  if (show) {
    userPassword.type = "password";
    eyeCheck.src = "./images/ojoCerrado.png";
    leftEyelid.style.visibility = "hidden";
    show = false;
  } else {
    userPassword.type = "text";
    eyeCheck.src = "./images/ojoAbierto.png";
    leftEyelid.style.visibility = "visible";
    show = true;
  }
};

/* Cielo estrellas*/

const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const generateStars = () => {
  const layer = [];
  const totalStars = 70;
  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[~~(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}px ${y}px 0 ${color}`);
  }
  const starsContainer1 = document.querySelector(".space-1");
  const starsContainer2 = document.querySelector(".space-2");
  const starsContainer3 = document.querySelector(".space-3");
  starsContainer1.style.setProperty("--space-layer", layer.join(","));
  starsContainer2.style.setProperty("--space-layer", layer.join(","));
  starsContainer3.style.setProperty("--space-layer", layer.join(","));
}
generateStars();

const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[~~(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}px ${y}px 0 ${color}, ${x + 25}px ${y + 6}px 0 ${color}`);
  }
  const spaceContainer = document.querySelector(selector);
  spaceContainer.style.setProperty("--size", size);
  spaceContainer.style.setProperty("--duration", duration);
  spaceContainer.style.setProperty("--space-layer", layer.join(","));
}


generateSpaceLayer("2.5px", ".space-4", 10, "25s");
