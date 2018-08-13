// Select color input
let color = document.getElementById("colorPicker");
// Select size input
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let sizePicker = document.querySelector("#sizePicker");
const table = document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(e) {
  e.preventDefault();
  makeGrid();
});

function makeGrid() {
  // Your code goes here!
  table.innerHTML = "";
  for (let x = 0; x < height.value; x++) {
    let row = document.createElement("tr");
    for (let y = 0; y < width.value; y++) {
      let col = document.createElement("td");
      row.appendChild(col);
    }
    table.appendChild(row);
  }

  table.addEventListener("click", function(e) {
    if (e.target.nodeName === "TD") {
      e.target.style.backgroundColor = color.value;
    }
  });
}
