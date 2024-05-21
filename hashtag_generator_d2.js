// Programming Question: Hash Tag Generator

//? You are required to implement a function generatorHash that generates a hash tag from a given input String.
//? The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag FormData, where each word is capitalized and cancatenated
//?  together without spaces.
//? If the length of the input string is greater than 200 characters or if the input string is empty or
//  contains anly whitespace, the function should return false.

//?  Otherwise, the function should return the generated hash tag prefixed with #.


//*  Write a function generateHash to accomplish this task.

const generateHash = (str) => {
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }
    str = str.split(" ");
    str = str.map((curElem) => 
    curElem.replace(curElem[0],curElem[0].toUpperCase())
    );
    // for #tag o/p
    str = `#${str.join("")}`;
    console.log(str);
    return str; 
};

console.log(generateHash("my name is pratyush kumar dehury"));
