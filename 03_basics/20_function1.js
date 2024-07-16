//function is used to save the time and code resuablity write once use many times
//
// function myName()
// {
//   console.log("Rohan");
//   console.log("Dalal");
// }//function definition 

// myName // reference of function
//  myName() // execution of function

 //function Add2no(num1,num2)
 //{
    //  console.log(num1+num2);    
//}

// function Add2no(num1,num2)
//  {
//   let result =num1+num2; 
//   return result;   
//   console.log("rohan dalal");//the code written after return will never be executed so rohan dalal will never printed
//   return num1 + num2;
// }
//  const result=Add2no(3,4)

// console.log("result",result);



// function login(username)
// {
//   if(username === undefined)
//   {
//     console.log("please enter any name");
//     return 
//    }
//   return `${username} just logged in`
// }
// console.log(login())



//function login(username = "sam")// in this never printed "undefined" bcz at least sam string is printed if any other string is passed during call then this string overwrite on sam
//  {
//     if(username === undefined)
//     {
//      console.log("please enter any name");
//      return 
//     }
//    return `${username} just logged in`
//  }
//   //console.log(login())



function calculateCartPrice(val1 , val2, ...num1){
    return num1;
//in this function parameters(... is used as rest operator means all the values thsat is passed while calling the function is pushed into num1 by ... rest operator
//but before that rest operator we pass val1 and val2 so they occoupied first two values from calling and rest are pushed into num1 )
}

// console.log(calculateCartPrice(200,300,400,500,600));

const user={
    username:"Rohan",
    price:199
}
function handleObject(anyobject){
  console.log(`User nmae is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);//we can pass an object and an array as arguement while calling the function

const myNewArray=[200,400,600,800]

function returnsecondValue(getArray){
    return getArray[2];
}


// console.log(returnsecondValue(myNewArray));

console.log(returnsecondValue([200,400,800]));//we can pass an object and an array as arguement while calling the function