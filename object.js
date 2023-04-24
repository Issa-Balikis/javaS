//Objects with js. It is a collection of properties. Each property has a value.

/* var person = {
    // keys      values
    firstName: "Issa",
    age: 23,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 07, 30).toJSON(),
    //nexted obj
    address:{
        city: "Lagos",
        postcode:"100001"
    }
}
console.log(person.firstName);
console.log(person.age);
console.log(person.dob);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person)) */


//obj.spread operators

const address = {
        city: "Lagos",
        country: "Nigeria",
        postCode:"100001"
    };

const name = {
    firstName: 'issa',
    lastNmae: 'kimmie'
};    

const person = {...address, ...name};

console.log(JSON.stringify(person, null, 2));

//  enhaced object property; a new syntax when working with objects.