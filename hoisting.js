// Hoisting - the interpreter looks at the variables declared with var and assigned them at the top of the file without the actual value.
//understanding why using the (var) keyword is a bad practice and understanding how to solve it.
//var used to be the old way of declaring variables.

for (var p = 0; p <= 10; p++) {
    console.log(p);
}

console.log("value of p outside a loop" + p);