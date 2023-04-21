const convertToCelsius = function(fTemp) {
  const convertedTemp = (fTemp - 32) * (5/9);

  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
  const convertedTemp = (cTemp * 1.8) + 32;

  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
