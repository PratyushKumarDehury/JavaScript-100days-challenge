// Q. Find the Minimum Value in an Array.

// Write a function findMin that takes an array of numbers as input and returns the minimum
// value found in the array.

// Constraints:

// 1.The input array may contain both positive and negative integers.
// 2.The input array may be empty.
// 3.The input array may contain duplicate values.


const findMin = (arr) => {
    arr = arr.sort((a,b) => {
        if(b > a) return -1;
    });
    return arr[0];
};

console.log(findMin[5,10,2,8]);




// Note:

// In JavaScript, the spread syntax(...) is used to expand an array into 
// individual elements. In this function, ...arr is used to spread the elements of the input array arr.

// For Example, if arr is [5, 10, 3, 9], then ...arr expands to 5, 10, 3, 9.
