// const name = "niharika"
// const repoCount = 50;
// // console.log(name+repoCount+"yap");
// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);
// const gameName = new String("niharika");
// //string is an obj with key value pair
// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.indexOf('n'));//finds the index of this element in the string
// console.log(gameName.charAt(2));//which alphabet is at this index
// const newString = gameName.substring(0,4);//last index was ignore
// console.log(newString);

//slice :- can go negative indexing as well
// const anotherString = gameName.slice(-7,4);
// console.log(anotherString);

const newstr = "    niharika    ";
console.log(newstr);
console.log(newstr.trim());//trims outs white space

const url = "https://teenage.com/teenage%20rant";
console.log(url.replace('%20','-'));
console.log(url.includes('teenage'));//if this exists in the string then it will give true

const nihu = 'ni-ha-ri-ka';
console.log(nihu.split('-'));//splits the array on this basis