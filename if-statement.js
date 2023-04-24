// If Statement; allows you to execute a piece of code based of a condition. if a specified condition is true.
/* var condition = 1 < 0;

if (condition) {
    console.log("Runs...");
} else {
     console.log("some code");
}
 */

/* var gender = 'Y';

if (gender == 'M') {
    console.log('Male');
} else if (gender == 'F' || gender == 'FEMALE') {
    console.log('Female');
}else {
    console.log('unkown');
} */

// You can have as many (else-if) statements.




// SWITCH STATEMENT
var gender = 'JJ'

switch(gender) {
    case "M":
        console.log('Male');
        break;
    case "F":
        console.log('Female');
        break;
    default:
        console.log('Unknown');        
}