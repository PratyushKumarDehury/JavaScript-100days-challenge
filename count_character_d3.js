//Q: Interview Question: Count Occurrences of Character


// Task:
//? write a function called countChar that takes two parameters: a string and a character 
//? to count. The function should return the nyumber of times the specified character appears
//? in the string.

// todo Connstsraints:

//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase chcarcters.
//? The character parameter can be any printable ASCII character(the function should accept any 
//? character that is part of the ASCII character set and is printable).

function count(name, char1){
    counter = 0;
    let words = name.split('');
    for(let char of words){
        if(char.toLowerCase() === char1.toLowerCase()){
            counter++;
        }
    }
}

count('misishsijahs', 's');
console.log(counter)


// using reduce method->(Answer-2)

// const countChar = (word, char) => {
//     word = word.toLowerCase();
//     char = char.toLowerCase();

//     totalCount = word.split("").reduce((accum, curChar) =>{
//     if(curChar === char){
//         accum++;
//     } 
//     return accum;
// },0);
//     return totalCount;
// };
// console.log(countChar('misishsijahs', 's'));

