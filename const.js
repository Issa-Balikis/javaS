//const; no reassignment is allowed. means it is constant and the value will never change. if using a object, you can mutate the content of the object, but not reassign the object variable to a different data type. 
const brand = "kimmiee";
const brandObject = {};
brandObject["brand"] = brand;
/* brand = {};
brand = 10;
brand = function() {
    return "ghgh"
} */
console.log(brand);
console.log(brandObject);

const hello = function() {
    console.log("hello");
}

//hello = 1

hello();

//for everything you do in js, it is recommended that you start with the const keyword.
// if you need to reassign, you use the let keyword.

