// an object is a "KEY VALUE PAIRS"
let user = {
    age : 33,
    name : "John",
    has_kids : true,
    "like birds": false,
    isAdmin: false
}
console.log(user); // { age: 33, name: 'John', has_kids: true }
console.log(user.name); // John
console.log(user["age"]); // 33

let x = "age";
let y = 40;
user[x] = y;
console.log(user);
// {
//     age: 40,
//     name: 'John',
//     has_kids: true,
//     'like birds': false,
//     isAdmin: false
// }
