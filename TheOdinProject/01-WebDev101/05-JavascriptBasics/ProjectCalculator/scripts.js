const calculations = document.querySelector('#calculations')
const equalSymbol = document.querySelector('#equals')
const total = document.querySelector('#total')
const inputs = document.querySelectorAll('.input');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');

let currentNum = ''; 
let runningTotal = 0;
let equation = [];

function addNum() {
  currentNum += this.textContent;
  calculations.textContent += this.textContent;
}

function addOperator() {
  lastChar = equation[equation.length - 1];
  equation.push(currentNum);

  if (lastChar == '+' || 
      lastChar == '-' || 
      lastChar == '×' || 
      lastChar == '÷') {
    lastChar = this.textContent;
    calculations.textContent += this.textContent;
    currentNum = '';
  } else {
    equation.push(this.textContent);
    calculations.textContent += this.textContent;
    currentNum = '';
  }
};

function addDecimal() {
  if (!currentNum.includes('.')) {
    currentNum += '.';
  }
};

function outputArray() {
  equation.push(currentNum);
  console.log(equation.join(''));
  console.log(eval(analyzeEqation(equation)));
  equation = [];
  currentNum = '';
};

function analyzeEqation(equation) {
  newEquation = equation.join('')
  newEquation = newEquation.replace(/×/g, '*');
  newEquation = newEquation.replace(/÷/g, '/');
  return newEquation
};

inputs.forEach(number => number.addEventListener('click', addNum));
operators.forEach(opp => opp.addEventListener('click', addOperator))
decimal.addEventListener('click', addDecimal);
equals.addEventListener('click', outputArray);