function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
  function getSum(total, num) {
    return total + num;
  };

	return arr.reduce(getSum, 0);
} 

function multiply (arr) {
	return arr.reduce((total, num) => total * num);
}

function power(b, e) {
	return Math.pow(b, e)
}

function factorial(n) {
  if (n == 0) return 1;
  
  let result = 1;

  for (let i = n; i > 0; i --) {
    result *= i;
  };
  return result
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}