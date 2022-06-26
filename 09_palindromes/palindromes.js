
const myPalindromes = phrase => {
    const regex = /[A-Za-z]/g;
    const onlyLetters = phrase.match(regex); 
    const onlyLettersLower = onlyLetters.map(element => {
        return element.toLowerCase(); 
    });
    const onlyLettersLowerCopy = onlyLettersLower.map((x) => x); 
    const reverseOnlyLettersLowerCopy = onlyLettersLowerCopy.reverse(); 
    function arrayEquals(a, b) {
        return a.every((val, index) => val === b[index]);
    }
    return arrayEquals(onlyLettersLower, reverseOnlyLettersLowerCopy);
}

// WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW versus given solution WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

const palindromes = function (string) {
    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};

palindromes("Just wave Things ..."); // false





// Do not edit below this line
module.exports = palindromes;
