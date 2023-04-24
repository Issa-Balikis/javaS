//Functions; it is a set of statement that performs a task or calculates a value. 
                       //parameters
function addNumbers(number1, number2) {
    var addition = number1 + number2;
    return addition;
}
    //arguments
var result1 = addNumbers(10, 10);
var result2 = addNumbers(5, 9);

console.log(result1);
console.log(result2);
//a function may or may not return a value.

//built-in function method
var person = {
    name: "Issa"
}
console.log(Object.values(person));
console.log(Object.keys(person));

console.log("issa".toUpperCase());
console.log("Issa".toLowerCase());
console.log("Issa".indexOf("s"));