const ftoc = (f) => {
  // [°C] = ([°F] − 32) × 5⁄9
  let celcius = ((f - 32) * (5 / 9));
  return parseFloat(decimalToOnePlace(celcius));
};

const ctof = (c) => {
  // [°F] = [°C] × 9⁄5 + 32
  let fahrenheit = (c * (9 / 5) + 32);
  return parseFloat(decimalToOnePlace(fahrenheit));
};

function decimalToOnePlace(num) {
  return Number.parseFloat(num).toFixed(1);
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
