// Programming Question: Sort an Array

//? Write a function to sort an array of numbers in an ascending order

// Example usage:

const sortArray = (arr) => {
    
    return arr.sort((a,b) => b - a);
    // return arr.sort();
   

};
console.log(sortArray([5,3,10,8]));

//?todo requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.

