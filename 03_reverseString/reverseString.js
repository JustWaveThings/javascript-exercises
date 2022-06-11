const reverseString = (string) => {
    const fwdString = string.split('');
    const rewString = fwdString.reverse();
    let result = rewString.join('');
    return result
};

// psuedocode
// take string and make array with element being each letter
// then reverse array
// then array.toString() - should work



// Do not edit below this line
module.exports = reverseString;
