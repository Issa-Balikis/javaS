//Loops; allows you to execute a piece of code over and over again until a condition is reached.
var names = [
    "Issa",
    "Humi",
    "Ruman", 
    "Oyiza",
    "Ize"
];

/* for (var p = 0; p <= 100; p++) {
    console.log(p);
} */
console.log("for i")

for (var p = 0; p < names.length; p++) {
    console.log(names[p]);
}

//OTHER TYPES

console.log("for of")

for (const name of names) {
    console.log(name);
}

console.log()
console.log("forEach");
names.forEach(function(name) {
    console.log(name);
})