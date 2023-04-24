let findTheOldest = function(array) {
  let person = {};
  let oldestAge = 0;

  function age(birth, death) {
    if (!death) {
      return new Date().getFullYear() - birth;
    } else {
      return death - birth;
    }
  }

  array.forEach(p => {
    pAge = age(p.yearOfBirth, p.yearOfDeath);

    if (pAge > oldestAge) {
      oldestAge = pAge;
      person = p;
    }
  });

  return person;
}

module.exports = findTheOldest