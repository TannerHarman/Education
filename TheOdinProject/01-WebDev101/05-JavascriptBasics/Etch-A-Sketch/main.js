let container = document.querySelector('main');

let gridInput= 16;

// box amount formula
function generateBoxes(input) {
  let numberOfBoxes = input * input;

  for (i = numberOfBoxes; i > 0; i--) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
  };

  for (i = numberOfBoxes; i > 0; i--) {
    const box = document.querySelector('.box')
    box.style.height = `${600/gridInput}px`;
    box.style.width = `${600/gridInput}px`;
    box.classList.add('f-box')
    box.classList.remove('box')
  };

  function blackBox(e) {
    this.style.background = 'black';
  };
  
  const boxes = document.querySelectorAll('.f-box');
  boxes.forEach(box => box.addEventListener('mouseover', blackBox));
};

generateBoxes(gridInput);