const boxes = document.querySelectorAll('.input');
const equals = document.querySelector('.equal');

let array = []

function output() {
  array.push(this.textContent)
}

boxes.forEach(box => box.addEventListener('click', output));
