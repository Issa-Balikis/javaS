// Break and Continue; can only be used within loops, either within for loops or while loops

//break keyword breaks out of the loop.
/* 
 for (var p = 0; p <= 10; p++) {
    console.log(p);
    if (p == 5) {
        break;
    }
 } */

 //continue 

 for (var p = 0; p <= 10; p++) {
    if (p < 5) {
        continue;
    }
    console.log(p);
 }