let colors = [
  "rgb(3, 7, 30)",
  "rgb(55, 6, 23)",
  "rgb(106, 4, 15)",
  "rgb(157, 2, 8)",
  "rgb(208, 0, 0)",
  "rgb(220, 47, 2)",
];

let square = document.querySelectorAll(".square");

let span = document.querySelector("#colorDisplay");

let mensaje = document.querySelector("#message");

let h1 = document.querySelector("h1");

let reset = document.querySelector("#reset");

let easyBtn = document.querySelector("#easybtn");

let hardBtn = document.querySelector("#hardbtn");

let ocultar = document.querySelectorAll(".ocultar");

let numberOfSquares = 6;

function changeColor(color) {
  for (let i = 0; i < colors.length; i++) {
    square[i].style.backgroundColor = pickedColor;
  }
}

function pickColor(num) {
  let numRam = Math.floor(Math.random() * num);

  return numRam;
}

function randomColor() {
  let num1 = Math.floor(Math.random() * 256);
  let num2 = Math.floor(Math.random() * 256);
  let num3 = Math.floor(Math.random() * 256);
  let rgb = `rgb(${num1}, ${num2}, ${num3})`;
  return rgb;
}

function generateRandomColor(numberOfSquares) {
  let arr = [];

  for (let i = 0; i < numberOfSquares; i++) {
    arr.push(randomColor());
  }
  return arr;
}

colors = generateRandomColor(numberOfSquares);

let pickedColor = colors[pickColor(numberOfSquares)];

span.innerHTML = pickedColor;

function resett() {
  colors = generateRandomColor(numberOfSquares);

  todo();

  span.innerHTML = pickedColor;

  h1.style.background = "steelblue";

  mensaje.textContent = "";

  reset.textContent = "New Colors";

  if (easyBtn.classList.contains("selected") === true) {
    pickedColor = colors[pickColor(numberOfSquares)];
  } else {
    pickedColor = colors[pickColor(numberOfSquares)];
  }
  console.log(colors);
}

reset.addEventListener("click", function () {
  resett();
});

function todo() {
  for (let i = 0; i < colors.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor) {
        mensaje.textContent = "Correct!";
        h1.style.backgroundColor = pickedColor;
        changeColor();
        reset.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        mensaje.textContent = "Try Again";
      }
    });
  }
}
todo();

function block() {
  for (let i = 0; i < ocultar.length; i++) {
    ocultar[i].style.display = "block";
  }
  generateRandomColor(numberOfSquares);
  resett();
  pickedColor = colors[pickColor(numberOfSquares)];
}

function none() {
  for (let i = 0; i < ocultar.length; i++) {
    ocultar[i].style.display = "none";
  }
  generateRandomColor(numberOfSquares);
  resett();
  pickedColor = colors[pickColor(numberOfSquares)];
}

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numberOfSquares = 3;
  none(numberOfSquares);
});
hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numberOfSquares = 6;

  block(numberOfSquares);
});
