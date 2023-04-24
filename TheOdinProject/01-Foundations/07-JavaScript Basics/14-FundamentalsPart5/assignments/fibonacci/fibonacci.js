const fibonacci = function(count) {
  if (count <= 0) return 'OOPS';
  let a = 0;
  let b = 1;

  while (count > 1) {
    let temp = b;
    b = a + b;
    a = temp;
    count --;
  }

  return b
  
}; 

module.exports = fibonacci;