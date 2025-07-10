// console.log(1);
// console.log(2);
// setTimeout(function(){
//     console.log(3);//assignment
//     console.log(4);//2hrs
// }
// ,0//milisecond daal do else if you give 0 then just reminds later
// );
// for(let v = 0; v<10000;v++){
//     v++;
// }//time delay hua h 
// console.log(5);//date with a girl
// console.log(1);
// console.log(2);
// setTimeout(function(){
//     console.log(3);
// },0);
// setTimeout(function(){
//     console.log(4);
// },2000);
// console.log(69);
// let i = 1;
// let k = setInterval(function(){
//     console.log(i++);
// },1000);
// setTimeout(function(){
//     clearInterval(k);
// }
// ,5000);

//promise

// let kaam = new Promise(function (resolve,reject){
//         //kaam (getting data from database)
//         setTimeout(function(){
//             resolve({name:"niharika"});
//             // reject({error:"GO AWAY!"});
//         });
// })

// console.log(kaam);

// promise contains state and data
// pending
// resolved
// reject

//using intervals
// This message will appear once after 4 seconds
// setTimeout(() => {
//     console.log("Hi Bhai");
// }, 4000);

// // This message will repeat every 3 seconds
// let id = setInterval(() => {
//     console.log("Calling setTimeout");
// }, 3000);

// // This will stop the repeating message after 10 seconds
// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

//using promises
let myPromise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

myPromise
  .then((result) => {
    console.log("✅", result);
  })
  .catch((error) => {
    console.log("❌", error);
  });