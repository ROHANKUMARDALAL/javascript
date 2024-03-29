//Arrays

const myArr=[0,1,2,3,6,5]

const Myhero = ["rohan","abhi","riya","ashish"]

const MyArr2 = new Array(1,2,3,4,5)

const newArr =myArr.join() // join method is bind the array and converted into String datatype

//console.log(myArr.sort());

//  console.log(MyArr2)

//  console.log(Myhero.length)

//Array Methods
 
//   myArr.push(7) 
//   myArr.pop()

//   myArr.unshift(9)   //insert the value at the begning of an Array
//   myArr.shift()           // remove the value from begning of an Array


// (.includes) is used to check the value is present in an Array or not

//  console.log(myArr.includes(9))


//console.log(myArr)
//console.log(newArr)

// slice , splice    methods 


//. slice is use to split the array and form new array without affecting the original array
//   splice is use to split the array and form new array & affecting the original array 

console.log("A",myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("c",myArr )
