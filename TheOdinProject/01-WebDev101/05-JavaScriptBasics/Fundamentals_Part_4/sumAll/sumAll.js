const sumAll = function(num1, num2) {

  let start = Math.min(num1, num2)
  let end = Math.max(num1, num2)

  let negNumber = function() {
    if (num1 < 0 || num2 < 0) {
      return true
    } else {
      return false
    }
  };

  let wrongDataType = function() {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
      return true
    } else {
      return false
    }
  }
  
  if (negNumber() || wrongDataType()) {
    return 'ERROR'
  } else {
      return (end*(end+1) - (start-1)*start) / 2;
    };
}
console.log(sumAll(1, 4));
module.exports = sumAll