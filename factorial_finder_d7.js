// Challenge: Factorial Finder

// Write a function factorial that takes anon-negative integer num as input and returns its factorial.
// The factorial of a non-negative integer navigator,  denoted as n!, is the product of all positive integers
// less than orvequal to n. The factorial of 0 is defined as 1.

const factorial = (num) => {
    let fact = 1;
    for(let i = 1; i <= num; i++){
        // console.log(i);
        fact = fact * i;
    }
    return fact;    
}

console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(2));