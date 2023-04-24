const palindromes = function(string) {
 pString = string.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");

 reversepString = pString
                  .split('')
                  .reverse()
                  .join('');

 return reversepString == pString;
};

module.exports = palindromes