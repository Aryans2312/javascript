/*
their are 2 types of memory 
stack and heap 
stack is used for primitive 
heap is used for non primitive
when stack is used we get a copy of the value to work with
when heap is used we use the address of the variable created or constant
*/

//stack example

let myYoutubeChannel = "Aryans Tyagi"

let anotherChannel = myYoutubeChannel

anotherChannel = "dada"
console.log(anotherChannel);
console.log(myYoutubeChannel);

//heap example 

let user1 = {
    name : "Aryans",
    age : 21,
    upiid: 7000058270
}

let user2 = user1

user2.upiid = 9926568802

console.log(user1.upiid)
console.log(user2.upiid)
