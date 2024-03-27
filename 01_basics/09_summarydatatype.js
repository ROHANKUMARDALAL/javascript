// .........primitive datatypes......

/*
  String
  Number
  Null
  Boolean
  Undefined
  Symbol  it is use to make the value unique 
  BigInt
*/

// ......Non-Primitive datatypes......
/*
   Arrays
   Objects
   Functions
*/

const score = 100
const scoreValue = 100.3 // number datatype


const IsloggedIn = false // datatype is boolean
const Temp     = null  //datatype is object
let email;

const Id =Symbol('1234')
const Id2 =Symbol('1234')
console.log(Id == Id2) // both values are same but still answer is false bcz of Symbol keywords

const BigNumber =345678765123n

const Heros=["Shaktiman","hobbo","mightyraju"]  //Array datatype  is obeject

let Myobj={ //datatype is object
    name: "rohan dalal",
    age: 24,
    college: "AKG"
}//inside the curly braces is object it can be any datatype(number,string,array,another object also)

console.log(Myobj)

const MyFun=Function() //datatype is function
{
   console.log("hello world ")
}

console.log(typeof(MyFun))
console.log(typeof(Temp))
console.log(typeof(Myobj))
console.log(typeof(Heros))
console.log(typeof(scoreValue))
console.log(typeof(Id2))
console.log(typeof(IsloggedIn))