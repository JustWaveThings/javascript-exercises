

const palindromes = (phrase) => {
    const regex = /[A-Za-z]/g;
    const newPhrase = phrase.match(regex); 
    const phraseLower = newPhrase.map(element => {
        return element.toLowerCase();
    });
    const reversePhrase = phraseLower.reverse();
    console.log(phraseLower);
    console.log(phraseLower.reverse());
    return (phraseLower === reversePhrase) ? true : false;
}; 
palindromes("ZZZZ car, a man, a maracaz.");

// Do not edit below this line
module.exports = palindromes;
