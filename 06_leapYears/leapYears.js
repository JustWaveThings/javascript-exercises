const leapYears = (years) => {
    if ((years % 400) === 0) return true;
    if ((years % 4) === 0 && (years % 100) !== 0) return true;  
    return false;
};

//pseudocode 
// && (years % 100) === !0)
// need to see if input is divisible by 4 or 400, but not 100

// Do not edit below this line
module.exports = leapYears;
