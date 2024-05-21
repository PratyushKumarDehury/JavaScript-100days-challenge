// write a function called isPowerOfTwo that takes an integer num as input and returns
//  true if num is a power of throw, and false otherwise.

const isPowerOfTwo = (num) => {
    let a = false;
for(let i = 1; i < num; i++){
    if(2 ** i == num){
        a = true;
    }
}
return a;
}

console.log(isPowerOfTwo(5)); //false
console.log(isPowerOfTwo(8)); //true