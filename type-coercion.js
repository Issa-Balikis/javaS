// Type coercion; a process of converting a value from one type to another.
// Equality without type coercion === triple equal.
//it is always best to use triple equals when performing comparisons between values.

console.log("with type coercion")
console.log(typeof 0 + " " + typeof false);
console.log(0 == false);

console.log(typeof "0" + " " + typeof false);
console.log("0" == false);

console.log(typeof 1 + " " + typeof "1");
console.log(1 == "1");

console.log("without type coercion")
console.log(typeof 0 + " " + typeof false);
console.log(0 === false);

console.log(typeof "0" + " " + typeof false);
console.log("0" === false);

console.log(typeof 1 + " " + typeof "1");
console.log(1 === "1");


//single and double quote
//there's really not much differnce between the two. 
//what you should do is decide what will be used consistently.
//Also, using semi colon is not mandatory in js. you also need to decide how to keep your code consistent.

