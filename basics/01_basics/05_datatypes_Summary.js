//primitive data types

// 7 types(call by value) : string, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;
// const ID = Symbol("123");
// const ID2 = Symbol("123");
// console.log(ID === ID2);
// const bigNumber = 213233423232323n;
//Non-primitive(refference)

// Array, Objects , Functions
// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myFunction);

//++++++++++++++++++++ memory +++++++++++++++++++

//stack(primitive):- gives a copy, heap(Non-primitive):- gives a refference
//stack
// +----------------------+
// |   30                 |
// +----------------------+
// |   anotherName        |
// +----------------------+
// |   my youtube name    |
// +----------------------+

let myYoutubename = "teenagerant";
anothername = "cigg after sex";
let anotheName = myYoutubename;//doesnt change the actual value

console.log(myYoutubename);
console.log(anothername);
let user1 = {
    email:"user@google.com",
    upi:"093823928328@sbi"
}
let user2 = user1;//points at the same place as user 1 in memory
user2.email="1912@2006gmail.com"
console.log(user1.email);