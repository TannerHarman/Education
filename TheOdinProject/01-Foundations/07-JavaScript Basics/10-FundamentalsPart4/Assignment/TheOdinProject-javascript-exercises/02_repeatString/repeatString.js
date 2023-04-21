const repeatString = function(string, repeat) {
  if (repeat < 0) return 'ERROR';

  let finalString = '';
  
  for (let i = 0; i < repeat; i++) {
    finalString += string;
  }

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
