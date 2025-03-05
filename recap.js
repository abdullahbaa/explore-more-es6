/**
 * 1.Var let const 
 * 2.default parameter
 * 3.template string
 * 4.arrow function
 * 5.distructuring and spread operator
 * 6.object.keys,object.values,object.entries
 * 7.for of used in array and string
 * 8.for in used in object
 */ 


// template string
const a= 56;
const numbers =[56,6,7];
const person ={
    name: 'Abdullah'
}
const message =`Hi,${person.name} has a:{a} access to ${bmbers[2]}`
// if (true){

// }

// arrow function
const square = x => x*x;
const sum =(a,b) => a+b;


// distructuring and spread operator

const {age, z, ...others}={x:2 , y:5, z:6 , name : 'abdullah', age: 24}
const [first, second, ...remaining]=['ram','sham','jodu','modhu'];