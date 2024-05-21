// Interview Question: Write a function to determine whether a given string is a palindrme or not.

const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g,""); //equivalent the character
    let str1 = str.split("").reverse().join("");
    console.log(str1);
    return str === str1 ? true:false;
}


console.log(isPalindrome("A man, a plan, a canal, panama"));  //o/p: true
console.log(isPalindrome("racecar")); //o/p: true
console.log(isPalindrome("hello")); //o/p: false    