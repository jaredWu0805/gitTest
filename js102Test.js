/*
ES6 - supoprt
Default Parameters
Babel
*/

// Arrow function
const test = (n) => {
  return n * 10;
}

var arr0 = [1,2,3,4,5];

console.log(
  arr0
    .filter(n => n > 1)
    .map(n => n * 2)
)

console.log(
  arr0
    .filter(n => {
      return n > 2})
    .map(n => {
      return n * 3})
)

// Rest Parameters and Spread Operator
let arr = [...[1,1,1],2,3];

var obj1 = {
  a: 1,
  obj2: {
    test: 50
  }
}

var obj3 = {
  ...obj1,
  c: 3
}

// Destructuring
var {a, ...rest} = obj3;
console.log(rest)

let obj = {
  double: 2,
  triple: {
    third: '33'
  }
}
var {...rest} = obj;

console.log(rest);
console.log(test(10))

// export
function add(a,b) {
  return a + b;
}

const PI = 3.14;

export {
  add,
  PI as constPi
}

//import
import {add, constPi as PPII} from './utils';

import * as utils form './utils';
