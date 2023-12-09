/* ****************   DataTypes   ****************** */
/////////////////////////// 2 Types /////////////////////

const { Long } = require("mongodb");

// 1. Primitive 
// 2. Non-primitive



/* --------------------------- Primitive DataTypes---------------------------- */
// 7 types : //

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefiend
// 6. Symbol


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

// console.log(typeof score);
// console.log(typeof scoreValue);

// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof useEmail);

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id);
// console.log(anotherId);

console.log(id === anotherId);

const bigNumber = 1245639874563214563n;



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory

// Stack Memory
// heap Memory





/* -----------------------Reference (Non-Primitive) DataTypes---------------------------- */

// 1. Array 
// 2. Objects
// 3. Function

const heros = ['Ironman', 'batman', 'superman'];

let superHeros = {
    name: 'Ironman',
    age: '34'
}

console.table(typeof superHeros);

const myFunction = function () {
    console.log(typeof bigNumber);
}
myFunction();