//* Programming Question: Longest word in a String.

// Q: Write a function findLongestWord that takes a string as input and retruns the longest word in the string. If there are 
// multiple longest words, return the first one encountered.

// Constraints:
//? The input string may contain alphabatic characters, digits,spaces and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces. 

//* Notes:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.



const findLongestWord = (str) => {
    if(str.trim().lenght === 0){
       return false;
    }
    words = str.split(" ");
    // sorting function 
    // strArr = strArr.sort();
     // If Descending order
    // words = words.sort((a,b) => a.length - b.length); 
    // If Ascending order
    words = words.sort((a,b) => b.length - a.length);
    console.log(words);
    // return strArr.at(-1);
    return words[0];
};
console.log(
    findLongestWord("Most elegant And Electrifying Wrestler Undertaker")
);