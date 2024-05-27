// coding challenge

// Q. Write a function to convert a string to camelCase.


const toCamelCase = (str) => {
    str = str.trim().split(" ");
    // console.log(str);
    str = str.map((curElem, index) => {
        if(index === 0){
            return curElem.toLowerCase();
        }else{
            return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
        }

    });
   
    // console.log(str);
    return str.join(""); //o/p: itsMyGalaxy
}
console.log(toCamelCase("its my galaxy"));