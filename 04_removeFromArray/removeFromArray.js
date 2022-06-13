const removeFromArray = (inputArray, ...manyArguments) => {
    const resultArray = inputArray;
        for (const item of manyArguments) {
            if (inputArray.includes(item)) {
                let itemIndex = inputArray.indexOf(item);
                // console.log(itemIndex); // returns '2' for first test which is correct
                inputArray.splice(itemIndex, 1);
             } else {
                 continue;
             }
        }
    return inputArray;
    };

// Go through my inputArray.  If any element matches with one of the manyArguments, that one doesn't get put into my new array - Array.includes(x);

// Do not edit below this line
module.exports = removeFromArray;
