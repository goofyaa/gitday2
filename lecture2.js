// //ways to create a string
// //1st way
// let a = "niharika";
// let b = 'niharika';
// //2nd way
// let first = "niharika";
// let last = "singh"
// let fullname = first +" "+ last;
// //console.log(fullname);
// let c =`niharika singh`;
// console.log(c);
// //third way
// let middle = 'sexy';
// let t =`niharika ${middle} singh`;
// console.log(t);


//functions
//1st :- normal function , parameterised , default parameterised , arrow unction , constructor function.
// function sayHi(){
//     console.log('HI NIGGA!!!');
// }
// //calling the function
// sayHi();

// function sayHi(say){
//     console.log(say);
// }

// sayHi("chomu");
// let nameX = prompt("tell me your name");
// if(nameX == "Niharika"){
//     console.log("hi niharika")
// }
// else{
//     console.log("ew no bye");
// }

// function sayHi(say,num){
//     console.log(say+" "+num);
//     return say+num;
// }
// let res = sayHi("hi brother",100);
// console.log(res);

// function sayHi(say=20,num){
// console.log(say);
// }

// sayHi("sundar");


// function maths(say=20,num){
// console.log(say+num);
// console.log(say);
// console.log(num);
// }
// maths(20);

//power of function(an attribute of it which only exist int his language)
let greetings = function sayHi(say){
    console.log(say);
}

//sayHi("hello");
greetings("good morning");

//arrays
//continuous 
//hetroginious
let a =[23,'niharika',true,greetings];
let b = new Array(23,"sunita",false);
console.log(b);
let k = [];

//push , pop , shift , unshift
let tt = a.push(2);
console.log(tt);
