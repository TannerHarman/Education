const container = document.querySelector('main');
const restart = document.getElementById('clear');

let gridInput = 16;

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
    box.style.height = `${600/input}px`;
    box.style.width = `${600/input}px`;
    box.classList.add('f-box')
    box.classList.remove('box')
  };

  function blackBox() {
    this.style.background = 'transparent';
  };
  
  const boxes = document.querySelectorAll('.f-box');
  boxes.forEach(box => box.addEventListener('mouseover', blackBox));
};

generateBoxes(gridInput);
restart.onclick = function() {
  const boxes = document.querySelectorAll('.f-box')
  boxes.forEach(box => {
    box.remove();
  });

  gridInput = prompt('What new Grid Size do you want?', 16);
  generateBoxes(gridInput);
};

