// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
// Ex-1
const numbers = [4,5,6,7,8,10];

function doubleIt(num){
    console.log('num now',num);
    return num *2;
}
const result = numbers.map(doubleIt)
console.log(result);


// Ex-2
const myNums = [2,3,4,5,6,7];
function doublrDo(numb){
    console.log('mynumb',doublrDo);
    return numb *3;
}
const result2 = myNums.map(doublrDo)
console.log(result2);

// Ex-3 -- function and arrow function all in one

const numbers1 = [4,5,6,7,8,10];

function doubleIt(num1){
    console.log('num now',num1);
    return num1 *2;
}
const double1 = n=> n*2;
const output = numbers1.map(double1)
console.log(output);
const output2 = numbers1.map(n => n*2);
console.log(output2);



// const doubled =[];
// for (const num of numbers){
//     const double =num *2;
//     doubled.push(double);
// }
// console.log(doubled);