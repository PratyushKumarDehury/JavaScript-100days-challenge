// Write a function that takes a number as input and returns the number of digits.

const SumofDigit = (num) => {
    let arr = Array.from(String(num), Number)
    console.log(arr);
    return arr.reduce((accum, currElem) => accum += currElem,0)
}

console.log(SumofDigit(13232));//o/p -> 11
