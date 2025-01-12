// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
 
// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function giveNames(userList) {
    let names = userList.map(user => user.name)
    return names
};

console.log(giveNames(users));
