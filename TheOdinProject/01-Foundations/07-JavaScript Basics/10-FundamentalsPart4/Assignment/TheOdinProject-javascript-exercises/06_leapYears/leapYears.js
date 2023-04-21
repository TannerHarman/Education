const leapYears = function(year) {
  const isDivBy4 = year % 4 === 0;
  const isDivBy400 = year % 400 === 0;
  const isDivBy100 = year % 100 === 0;

  return isDivBy4 && (isDivBy400 || !isDivBy100);
};

// Do not edit below this line
module.exports = leapYears;
