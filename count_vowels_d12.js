// Write a function that takes a string as input and returns the count of vowels
// in that string. Consider "a","e","i","o","u" as vowels (both lowercase and uppercase).

const countVowels = (str) => {
    let vowels = ['a','e','i','o','u'];
    let arr = str.split('');
    console.log(arr);

    let count = 0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello my fellow developers")); //o/p -> 8
console.log(countVowels("hgtoooht"));

// Constraints:

// The input string may contains in both uppercase & lowercase.
// The output should be a non-negative integer representing the count of vowels in the input String. 