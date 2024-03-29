//function is used to save the time and code resuablity write once use many times

function myname()
{
  console.log("Rohan");
  console.log("Dalal");
}//function definition 

// myname // reference of function
 //myname() // execution of function

 //function Add2no(num1,num2)
 //{
    //  console.log(num1+num2);    
//}

//function Add2no(num1,num2)
 //{
  // let result =num1+num2; 
  // return result;   
  // console.log("rohan dalal");//the code written after return will never be executed so rohan dalal will never printed
  //return num1 + num2;
//}
 //const result=Add2no(3,4)

//console.log("result",result);



 //function login(username)
 //{
   // if(username === undefined)
   // {
     //console.log("please enter any name");
     //return 
    //}
   //return `${username} just logged in`
 //}
 //console.log(login())



 function login(username = "sam")// in this never printed undefined bcz at least sam string is printed if any other string is passed during call then this string overwrite on sam
 {
    if(username === undefined)
    {
     console.log("please enter any name");
     return 
    }
   return `${username} just logged in`
 }
 console.log(login())