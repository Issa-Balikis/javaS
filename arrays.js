//Arrays; used for variables with multiple values. Allows you to store multiple values.
// []

/* var firstName = "Issa"
var names = [
    "Issa",
    "Humi",
    "Ruman", 
    "Oyiza"
];
console.log(names);
console.log("index 0 - " + names[0]); // console.log(names[index;starts from '0' to infinity])
console.log("index 1 - " + names[1]); 
console.log("index 2 - " + names[2]);
console.log("index 3 - " + names[3]);
console.log("index 4 - " + names[4]);
console.log("sixe = " + names.length);
 */


// Spread Operator Arrays; allows us to expand an expression where arguments, elements or variables are expected. we could use it to combine multiple arrays, hold arguments to function in arrays or transform a string to an array.

const arrayOne = ['Ize','Tolu','Fathia'];
const arrayTwo = ['Kim','Folu','Tola'];
const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
    console.log(name);
})

const name ='Fathia';
const nameToArray = [...name];
nameToArray.forEach(function(letter) {
    console.log(letter);
})

const addNumbers = function(n1, n2, n3) {
    return n1 + n2 + n3;
}
const numbers = [1, 5, 9];
const addition = addNumbers(...numbers);
console.log(addition);