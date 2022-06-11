const removeFromArray = (inputArray, ...manyArguments) => {
    if (Array.isArray(inputArray)) {
        const toArray = inputArray;  
    } else {
        const toArray = inputArray.split(" ");
    }
    // need a for loop to apply each argument to the array through one method
    for (const item of toArray) {
        // need conditional to determine if element is an index or a string
        if (typeof(item) = "string") {
            
        }
        // using splice() as the outer method, and find
    }

};



//From Exercise :  Implement a function that takes an array and some other arguments then removes the other arguments from that array:

//pseudocode // planning 

// there are two types of input in this function: 
// -- first the array to be worked on 
//      -- per test spec must work on strings and arrays (test 6)
//          -- should have a test to convert input string to array if not array (DONE)


// -- second, variable amount of optional arguments that need to be applied to the first array
//          -- per last test,  we only want to work on the same type (don't use a method that removes all instances of an element, only the first instance of the same type (last test))
//          -- manyArguments is an array, we will need to loop each element in the array through the selected method. 
//          -- I need it to work with strings as well as array indexes on the argument parameter.    
//              -- Probably use a conditional to determine if the element is a number or a string and handle accordingly with the string searching the array first and then if exists, returns the index, then process both conditions the same way.
//          -- What is the best loop to use for this? for (const of cat of cats) {
//                                                              code;
//                                                         }
//              
// 


// Do not edit below this line
module.exports = removeFromArray;
