// //arrays
// let greeting = function(){
//     console.log("HI");
// }
// greeting();
// let a = [123,"niharika",true,greeting];

// //accessing index :- starts from 0 to .....
// console.log(a[2],a[0],a[3]);//a[3]() will give undefined

// let b = [[1,[2,3],4,5],66,77,12,8];//nested array
// let ab = b[0];
// let bc = [1];
// console.log(b[0]);
// console.log(b[0][1]);
// console.log(bc);

// let arr = ["niharika",'kinjal',["sahu","sunita"],"jaipal"];
//object{key:value}
// let obj ={
//     name:"niharika",
//     age:18,
//     drive:false,
//     add:{
//         state:"UP",
//         city:"mathura"//nested object hain ye
//     },
//     say:function(){
//         console.log("slayyy!!!!");
//     },
//     marks:[12,33]
// }
//Two ways to access object
// Dot notation
//console.log(obj.drive);
//console.log(obj.say);//function is not executed so it will return the entire function
// console.log(obj.say());//undefined
// console.log(obj.add.city);

//everything inside java script is an object
// var abc = 5;
// console.log(window.abc);//window obj is. a global obj , every value is converted into an object
//window:- object and abc is the key
//every function is also object hehehehe
//all key are stored in the form of strings
// console.log(obj["name"]);//ab string main nhi convert karega 
// ' . ' is responsible for the conversion of key into string after which it is searched inside the obj

//PUSH
// arr=[1,2,3,4,4,5,6,8];
// arr.push(7); 
// console.log(arr.push(7));
// console.log(arr);
// console.log(arr.pop(4));//kuch bhi likh no fucks given last element hi pop hoga

// push - 4
// pop - 3
// shift  removes element from the front
// unshift - 7

// console.log(arr.shift(22,33,444));//doesnt matter kya likha h but will just pop an element
// console.log(arr);

// for(let val in obj){
//     console.log(val);
//     console.log([val]);
// }
// for(let pal of arr){
//     console.log(pal);
// }
//for in —- obj , for of -- array
//map , filter and reduce

// arr = [6,5,4,3,2,1];
// arr.map(function work(val,idx){//creates a new array
//     console.log(val*2,idx);
//     //val - value
//     // idx - index
// });//writing a function inside another function
//map iterates on idx specifically
//console.log(arr.map);
// let myfn = function(val, idx) {
//     // Kaam (Work)
//     let n = val * 2;
//     let finalans = n + 1;
//     return finalans;//return is compulsary
// }
// let newarr = arr.map(myfn);
// console.log(newarr);
// console.log(arr);

let arr = [6,5,4,3,2,1];
// let newarr = arr.filter(function(val,idx){
//     return val%2===0;//we return boolean value 1 or 0 , true and false
// });
// console.log(newarr);

let answer = arr.reduce(function(previous,current){
    console.log(previous,current);
    //return 2;//this is prev value
    return previous+current;
});
console.log(answer);