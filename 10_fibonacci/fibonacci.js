// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

// ```javascript
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8

// has to accept numbers & strings, not accept neg number - return "OOPS"

// gameplan --  parse input to make sure its a number(done), make sure its positive or output "oops"(done), iterate an array of the fibonacci sequence up to the input number's index(done). push each iteration to array(done) return the value of the array[index](done). step 5: profit.

    // const fibonacci = (input) => {
    //   const fib = parseInt(input) > 0;
    //   if (fib > 0) {
    //     const fibArray = [];
    //     let num = 0;
    //     for (let i = 0; i <= input; i++) {
    //       num = i - 1 + (i - 2); // make fib sequence
    //       console.log(num);
    //       fibArray.push(num); // push items to array
    //       console.log(fibArray);
    //     }
    //     return fibArray[input]; // return value of input[index]
    //   } else {
    //     return "OOPS";
    //   }
    // };



function fibonacci(num) {
    let a = 1;
    let b = 0;
    let temp;
    if(num < 0) {
        return "OOPS"
    } else {
        while (num > 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }
        return b;
    }    
}


// Do not edit below this line
module.exports = fibonacci;
