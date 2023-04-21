const sumAll = function(int1, int2) {
  const input = [int1,int2].sort();
  let err = false;

  input.forEach((number) => {
    if (typeof(number) !== 'number') err =  !err;
    if (number <= 0) err =  !err;
  })

  if (err) return 'ERROR'
  
  let list = [];
  let sum = 0;

  for (let i = input[0]; i <= input[1]; i++) {
    list.push(i);
  }

  list.forEach((number) => {
    sum += number;
  })

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
