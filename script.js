const container = document.getElementById('etch-container');
const eraseBtn = document.getElementById('erase');
const colorBtn = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const colorPicker = document.getElementById('colorPicker');

let pickedColor = 'black';
let isColoring = true;
let isErasing = false;
let isMouseDown = false;
colorBtn.style.backgroundColor = '#87CEEB';

function toggleColor() {
  isColoring = true;
  isErasing = false;
  colorBtn.style.backgroundColor = '#87CEEB';
  eraseBtn.style.backgroundColor = 'white';
}

function toggleErase() {
  isErasing = true;
  isColoring = false;
  eraseBtn.style.backgroundColor = '#87CEEB';
  colorBtn.style.backgroundColor = 'white';
}

function handleMouseDown(e) {
  e.preventDefault();
  isMouseDown = true;
  handleHover(e);
}

function handleMouseUp(e) {
  isMouseDown = false;
}

function handleHover(e) {

  if (isMouseDown) {
    if (isColoring) {
      e.target.style.backgroundColor = pickedColor;
    } else if (isErasing) {
      e.target.style.backgroundColor = 'white';
    }
  }
}

function clearGrid() {
  const cells = document.querySelectorAll('.grid-cell');

  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
}

colorBtn.addEventListener("click", toggleColor);
eraseBtn.addEventListener("click", toggleErase);
clearBtn.addEventListener("click", clearGrid);
container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseup", handleMouseUp);
container.addEventListener("mousemove", handleHover);
colorPicker.addEventListener('change', () => {
  pickedColor = colorPicker.value;
});
clearBtn.addEventListener("mousedown", () => {
  clearBtn.style.backgroundColor = '#87CEEB';
})
clearBtn.addEventListener("mouseup", () => {
  clearBtn.style.backgroundColor = 'white';
})