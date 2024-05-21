// Write a function that takes an array of integers as input and removes any duplicate 
// ElementInternals, returning a new array with only the unique elements.

const removeDuplicates  = (arr) => {
    let newArr  = [...new Set(arr)]
    // let newArr  = [new Set(arr)] //o/p ->[ Set(5) { 1, 2, 3, 4, 6 } ]
    // console.log(newArr);

    return newArr;
}

console.log(removeDuplicates([1,2,3,3,4,6,1,3]));


// The new Set() method in javaScript creates a new Set Object. A Set object is a collecton 
// of unique values. It can store any type of value, whether primitive values or object references.

