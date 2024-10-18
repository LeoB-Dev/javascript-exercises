const convertToCelsius = function(Fahr) {
  let convertedCels = (Fahr - 32) * 5/9
  return(parseFloat(convertedCels.toFixed(1)))
};

const convertToFahrenheit = function(Cels) {
  let convertedFahr = Cels / (5/9) + 32
  return(parseFloat(convertedFahr.toFixed(1)))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Take notes here first: