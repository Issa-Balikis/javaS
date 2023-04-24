//Callbacks; a function passed inside of another function and that function gets executed at some point.

function callbackExample (name, callback) {
    console.log(callback(name));
}
var callback = function(name) {
    return "hello " + name;
}

callbackExample("Issa Balikis", callback
)