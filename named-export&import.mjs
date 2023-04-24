// Named exports & import
//named exports allows us to create function where we can export multiple named values. The value can either be a function, an object, a class or a variable.
// named import allows us to import those values from the modules themselves.

/* import  * as math from './math.mjs';

console.log(math.add(2, 2));
console.log(math.subtract(2, 2));
console.log(math.divide(2, 2));
console.log(math.multiply(2, 2));
console.log(math.PI);  */

import {add, divide, PI} from './math.mjs';

console.log(add(2, 2));
console.log(divide(2, 2));
console.log(PI); 
