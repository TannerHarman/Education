const repeatString = function(string, multiple) {
if (multiple < 0) return 'ERROR'
let i;
let phrase = ''

for (i=0; i < multiple; i++) {
  phrase += string
  }
  return phrase
}

module.exports = repeatString