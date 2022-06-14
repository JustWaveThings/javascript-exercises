const sumAll = (num1, num2) => {
    let finalSum = 0;
    // error out invalid input
    if (num1 < 0 || num2 < 0 || typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        finalSum = 'ERROR';  
    };
    // create empty array
    const numArray = [];
    
    // populate the array from low to high 
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            numArray.push(i);
        }
    } else {
        for (let i = num2; i <= num1; i++){
            numArray.push(i);
        }
    }

    // time to sum the array
    
    if (finalSum !== "ERROR") {
        for (let t = 0; t < numArray.length; t++) {
            finalSum += numArray[t];
        }
    }
    return finalSum;
};  



// psuedocode

// input - we get two ints 

// expected behavior - we sum each int between as well as the start and the end

// if not int or positive num, throw error
    // use conditional && ! to get to that outcome

// -----------

// we need to check the parameters to make sure neither are negative.





// Do not edit below this line
module.exports = sumAll;
