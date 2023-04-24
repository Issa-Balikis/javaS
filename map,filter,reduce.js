// Map | Filter | Reduce. thye all work with array.
//MAP- only works with arrays.

var map = [1, 2, 3, 4, 5, 6, 7, 8].map(function(n) {
    return n * 2;
});

console.log("[].map");
console.log(map);

console.log("[].filter");
var filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]. filter(function(n) {
    return n % 2 == 0;
})
console.log(filter);

console.log("[].reduce"); // reduces all the values in an array into one.
var reduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100].reduce(function(accumulator, current) {
    return accumulator + current;
 });
 
 console.log(reduce);