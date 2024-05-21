// Interview Question: Write a function findMax that takes an array of numbrers 
// as input and returns the maximum number in the array.

const findMin = (arr) => {
    console.log(...arr);
    return Math.min(...arr);

}
// console.log(findMax());
console.log(findMin([1,5,3,67,13]));
console.log(findMin([-10.-6,-7,-4,-8]));
console.log(findMin([5]));
