const caesar = function(string, encryption) {
  shift = encryption % 26
  splitString = string.split('')

  function fLetter(l) {
    return String.fromCharCode(l);
  }

  function lowerCase(l) {
    if (l < 97) {
      return fLetter(l + 26)
    } else if (l > 122) {
      return fLetter(l -26)
    } else {
      return fLetter(l)
    }
  }

  function upperCase(l) {
    if (l < 65) {
      return fLetter(l + 26)
    } else if (l > 90) {
      return fLetter(l -26)
    } else {
      return fLetter(l)
    }
  }

  function addLetter(l) {
    letter = l.charCodeAt();
    lShift = l.charCodeAt() + shift;

      if (letter >= 97 && letter <= 122) {
        return lowerCase(lShift);
      } else if (letter >= 65 && letter <= 90){
        return upperCase(lShift);
      } else {
        return fLetter(letter);
      }
  };

  return splitString.map(addLetter).join('');
}

module.exports = caesar
console.log(caesar('Hellow, World!', -29))