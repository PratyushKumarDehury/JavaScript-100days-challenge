// Interview Qstn. -> Calculate the average

// Write a function called calculate average that takes an array of numbers as input and returns
// the average of those numbers. 

// function should be:

// Accept an array of numbers as input.
// Calcuate the sum of all the numbers in the array.
// divide the sum by the total number of elements in the array to
// find the average.
// Return the Calcuated average.


const CalculateAvg = (arr) => {
    let total = arr.reduce((accum, curElem) => accum + curElem,0);

    console.log(total);
    return total/arr.length;
}
console.log(CalculateAvg([5,10,15,20]));



