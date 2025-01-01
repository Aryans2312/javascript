/* 
2 types of data types
1) primitive data type 
 7 types - String , num , boolean , symbol , undefined , null , BigInt
2) Non primitive or reference type
 array , Objects , functions 
*/

const score = 100
const scoreValue = 103

const isLogged = true
const outsideTemp = null
let mystate ;

const id = Symbol(123)
const anotherid = Symbol(123)

console.log(id === anotherid);

//array example

const cricketers = ["Sachin" , "MS dhoni" , "Virat Kohli"]

let myObj = {

    name: "Aryans",
    age : 18,
   

}

const myfunction = function () {
    console.log("Aryans")
}
