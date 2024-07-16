// .........primitive datatypes......
//call by value(changes occurs in their copy value not affect the actual value)
/*
  String
  Number
  Null
  Boolean
  Undefined
  Symbol  it is use to make the value unique 
  BigInt
*/


// ......Non-Primitive datatypes/Reference type......
/*
   Arrays
   Objects
   Functions
*/

const score = 100
const scoreValue = 100.3 // number datatype


const isloggedIn = false // datatype is boolean
const temp     = null  //datatype is object
let email;

const Id =Symbol('1234')
const Id2 =Symbol('1234')
console.log(Id == Id2) // both values are same but still answer is false bcz of Symbol keywords

const bigNumber =345678765123n
//use n in the last to convert the int value into bigInt

const heros=["Shaktiman","hobbo","mightyraju"]  //Array datatype  is obeject

let myObj={ //datatype is object
    name: "rohan dalal",
    age: 24,
    college: "AKG"
}//inside the curly braces is object it can be any datatype(number,string,array,another object also)

console.log(myObj)

const myFun=Function() //datatype is function
{
   console.log("hello world ")
}

console.log(typeof(myFun))
console.log(typeof(temp))
console.log(typeof(myObj))
console.log(typeof(heros))
console.log(typeof(scoreValue))
console.log(typeof(Id2))
console.log(typeof(isloggedIn))