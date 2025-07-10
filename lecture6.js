// function myPromise(paise) {
//     // Bhai promise kar
//     return new Promise(function(resolve, reject) {
//         // my promise task
//         if (paise > 100) {
//             resolve("Bhai yee lee tere paise");
//         } else {
//             reject("F your money");
//         }
//     });
// }

// let ans = myPromise(90);

// ans
//     .then(function(result) {
//         console.log("Thanks bhai");
//         console.log(result);
//     })
//     .catch(function(error) {
//         console.log("Bhai please paise wapas kar dee");
//         console.log(error);
//     });

// let a = ()=>{
//     console.log("HI");
//     return 2*2;
// }

// console.log(a());

// let b = (num)=> num*2;

// console.log(b(3));
//prototype is an obj
//function inside an obj = methods
// let obj = {
//     name:"niharika",
//     age:21,
// }
// console.log(obj);
// console.log(obj.__proto__);

// async function doSomething(){
//     const a = 5;
//     a = 10;
// }
// console.log(doSomething());

// async function doSomething(){
//     //api calling
//     //db queries
// }
// let a = doSomething();
// a.then(function(){
//     console.log("something");
// })

// //creates promise on its own and fetches it
// const url = "";
// let ans = fetch(url);
// console.log(ans);
// ans.then((data)=>{
//     //console.log("got the answer");


// const url = "https://Dog.ceo/api/breeds/image/random"; // URL to fetch a random dog image
// let data = fetch(url);//fetch is used to throw a request on this url

// data.then((Res) => {
//     // console.log(data);
//     let a = result.json();//try to extract data from body
//     //a promise
//     return a;
// })
// .catch((err) => {
//     console.log(err);
//     console.log("error");
// })

// const url = 'https://dog.ceo/api/breeds/image/random';

// // Fetch from the API
// fetch(url)
//   .then((result) => {
//     console.log("1");
//     console.log(result);

//     // Convert the response to JSON
//     return result.json(); // This returns a Promise
//   })
//   .then((finalData) => {
//     console.log("2");
//     console.log(finalData); // Whole JSON object
//     console.log(finalData.message); // Dog image URL
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("Error");
//   });

// Async and await
// const url = 'https://dog.ceo/api/breeds/image/random';

// async function getData(url) {
//   let a = await fetch(url);  //making a request to url , i eencripted data so we use json     // Wait for the response
//   console.log(a);                 // Logs the Response object

//   let b = await a.json();//just waits for result from promuse         // Parse JSON from the response
//   console.log(b);                 // Logs the full JSON object
//   console.log(b.message);         // Logs just the image URL
// }

// getData(url); // Call the function

// console.dir(document);//dir gives obj converted info
// console.log(document);
// let h = document.getElementById();
// let t = document.querySelector('h1');
// console.log(t);
// console.dir(t);
// console.log(dispatchEvent.innerHTML);
let h1 = document.querySelector("div");
h1.textcontent = "Hi niharika";