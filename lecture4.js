// //High Order function 
// let greet = function (bol){
//     bol();
// //can be diff name from passed function
//     //return bol;
//     //can return function
// }
// //call back function
// function say (){
//     console.log("yo bro!");
// }
// greet(say);

//2nd condition
function pookie (){
    function sayhi(){
        console.log("hi");
    }

    return sayhi;
    //return sayhi(); will just execute the function 
    //and since it doenst return anything 
    //its output is undefined
}
let ans = pookie();
//console.log(ans);
ans();//this will execute sayHi

//go by flow of executing
