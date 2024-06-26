// write a function to calculate sum of squares of all elements in an array.
// For, examole, given the array [1,2,3], the function should return 14 because
// 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

const SumOfSquares  = (arr) => {
//     let sum = 0;
//     for(let elem of arr){
//         sum = sum + elem * elem;
//     }
//     return sum;
// }

// we can use reduce method as well.
return arr.reduce((accum, curElem) => (accum = accum + curElem * curElem), 0);
}

console.log(SumOfSquares([1,2,3]));