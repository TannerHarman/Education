const inputs = document.querySelectorAll('.input');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');

let currentNum = ''; 
let runningTotal = 0;
let equation = [];

function addNum() {
  currentNum += this.textContent;
}

function pushNum() {
  equation.push(currentNum);
  equation.push(this.textContent);
  currentNum = '';
};

function pushDecimal() {
  if (!currentNum.includes('.')) {
    currentNum += '.';
  }
};

function outputArray() {
  equation.push(currentNum);
  console.log(equation.join(''));
  equation = [];
};

inputs.forEach(number => number.addEventListener('click', addNum));
operators.forEach(opp => opp.addEventListener('click', pushNum))
decimal.addEventListener('click', pushDecimal);
equals.addEventListener('click', outputArray);