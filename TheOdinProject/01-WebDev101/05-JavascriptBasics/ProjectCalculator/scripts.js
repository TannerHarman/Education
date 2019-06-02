const calculation = document.querySelector('#calculations');
const operator = document.querySelector('#equals');
const total = document.querySelector('#total');
const clear = document.querySelector('.clear');
const inputs = document.querySelectorAll('.input');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');

let previousNum = '';
let currentNum = '';
let operatorSym = '';
let equation = [];

let clearEverything = () => {
  equation = [];
  currentNum = '';
  previousNum = '';
  operatorSym = '';
  calculations.textContent = '';
  total.textContent = '';
  operator.textContent = '';
}

let updateTotal = (val) => {
  total.textContent = val;
}

let updateEquation = () => {
  calculation.textContent = equation.join('');
}

function addNum() {
  currentNum += this.textContent;
  updateTotal(currentNum);
}

function addDecimal() {
  if (!currentNum.includes('.')) {
    currentNum += this.textContent;
  }
  updateTotal(currentNum);
}

function addOperator() {
  equation = [];
    if (previousNum && currentNum && operatorSym) {
      let currentSet = [];
      currentSet.push(previousNum, operatorSym, currentNum);
      equation.push(currentSet.join(''));
      
      calculation.textContent = previousNum = calculate();
      operator.textContent = operatorSym = this.textContent;
      total.textContent = currentNum = '';
  } else if (previousNum) {
      equation.push(previousNum);
      operator.textContent = operatorSym = this.textContent;
      calculation.textContent = previousNum = calculate();
  } else {
    operatorSym = this.textContent;
    previousNum = currentNum;
    currentNum = '';

    calculation.textContent = previousNum;
    operator.textContent = operatorSym;
    total.textContent = '';
  }
};

function analyzeEqation() {
  newEquation = equation.join('')
  newEquation = newEquation.replace(/×/g, '*');
  newEquation = newEquation.replace(/÷/g, '/');
  return newEquation
};

let calculate = () => {
  return runningTotal = eval(analyzeEqation());
}

const equate = () => {
  if (previousNum && currentNum && operatorSym) {
    equation = [];
    let currentSet = [];
    currentSet.push(previousNum, operatorSym, currentNum);
    equation.push(currentSet.join(''));
    
    calculation.textContent = previousNum = calculate();
    operator.textContent = operatorSym = this.textContent;
    total.textContent = currentNum = '';
  }
}

inputs.forEach(number => number.addEventListener('click', addNum));
decimal.addEventListener('click', addDecimal);
operators.forEach(opp => opp.addEventListener('click', addOperator))
equals.addEventListener('click', equate);
clear.addEventListener('click', clearEverything);