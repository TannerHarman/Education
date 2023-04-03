import myName from './myName';

function component() {
  const element = document.createElement('div');

  element.innerHTML = myName('Tanner');
  return element;
}

document.body.appendChild(component());