const name = "Aryans"
let repocount = 5

//console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and i have ${repocount} repositories on my github`);
//this is better way to represent string rather than using + ,+  the symbol used is located below 
//the esc key

const myFav = new String("MS-DHONI")
console.log(myFav[3])
console.log(myFav.__proto__)

console.log(myFav.length);
console.log(myFav.toLowerCase)

console.log(myFav.charAt(3))
console.log(myFav.indexOf('D'));

const newSubString = myFav.substring(0,4)
console.log(newSubString);
const anotherSubString = myFav.slice(-8,5)
console.log(anotherSubString)

const newString1 = " Aryans "
console.log(newString1);
console.log(newString1.trim);//works only on white spaces or new lines

const URL= "google.com"

console.log(URL.replace("google" , "youtube"))

console.log(URL.includes("com"))

console.log(myFav.split( "-" ));
