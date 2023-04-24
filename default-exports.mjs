//default export; allows us to export a single value.

import Animal from './animal.mjs';

var animal = new Animal();
console.log(animal.getClassType());