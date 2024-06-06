// Q. Write a function to check if a character is uppercase or lowercase.

const isUpperCase = (char) => {
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        return true;
    }
    return false;
}

// Other Method
// return char === char.toUpperCase();
// };
console.log(isUpperCase("PKD"));
// console.log(isLowerCase("pkd"));


