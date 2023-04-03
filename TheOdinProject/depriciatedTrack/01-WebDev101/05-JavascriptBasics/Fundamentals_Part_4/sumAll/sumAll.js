const sumAll = function(num1, num2) {

  let start = Math.min(num1, num2)
  let end = Math.max(num1, num2)

  let errorMessage = "ERROR"
 
  if (start < 0 || end < 0) return errorMessage;

  if (typeof num1 != 'number' || typeof num2 != 'number') return errorMessage;

  return (end*(end+1) - (start-1)*start) / 2;

}

module.exports = sumAll