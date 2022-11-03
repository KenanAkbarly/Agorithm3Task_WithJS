// A.
// Drop the Constants

let array = [1, 2, 3, 4];
let newArr = array;
console.log("Donguden evvel");
for(let i = 0; i <array.length; i++){       //O(n)
    console.log(  newArr[i]);            //O(1)
}
console.log("Donguden sonra");
for (let j = 0; j < newArr.length; j++){    //O(n)
    console.log( newArr[j]+1);            //O(1)
}
////This is O(2n), which we just call O(n).

// B.

/*
function sum(a,b){
    return a + b;
}
function multiply(a,b){
    return a * b;
}
function subtract(a,b){
    return a - b;
}
function divide(a,b){
    return a / b;
}
console.log(sum(10,2));
console.log(multiply(10,2));
console.log(subtract(10,2));
console.log(divide(10,2));\
*/