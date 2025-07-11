let score = "33a";
let Score = "33";
let x = undefined;
console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
// if it is not an actual number , the type will still be converted 
console.log(valueInNumber);
// but the value will be NaN 
let valueIn = Number(x);
console.table([typeof valueIn , valueIn]);
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
1 = true
0 = false
"" = false
"niharika" = true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
//***************************** operations ***************
let value = 3;
let negValue = -value;
console.log(negValue);

//arithematic operations
console.log(2+2);
console.log(2*2);
console.log(2-2);
console.log(2/2);

let str1 = "hello ";
let str2 = "niharika";
let str3 =str1+str2;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
// compiled from left to right
// use parenthesis for BODMAS conversions

//parenthesis conversion
console.log(true);
console.log(+"");
console.log(+true);

let num1, num2 , num3
num1 = num2 = num3 = 4;
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
//prefix :- increment before use
//postfix :- use before increment

