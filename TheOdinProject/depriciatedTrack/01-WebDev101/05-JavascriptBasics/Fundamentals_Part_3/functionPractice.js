function add7(number) {
  return number + 7;
};

console.log(add7(7));

function multiply(num1, num2) {
  return num1 * num2;
};

console.log(multiply(4, 5))

function captialize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

console.log(captialize("tanner"))

let lastLetter = function(string) {
  return string.slice(-1)
};

console.log(lastLetter('Harman'))