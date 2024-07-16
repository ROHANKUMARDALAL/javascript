// how to execute the program in JS understand with example

let val1=10; //step 2
let val2=5;  //step 2
function addNum(num1,num2){
    let total=num1+num2;
    return total;
} //step 2 definition of function

let result1=addNum(val1,val2);
let result2=addNum(3,4);

// step 1 : global execution

//  step 2: Memory phase (all varibles are stored in an memory )
//val1=val2=result1=result2=undefined

// step 3: execution phase 
//val1=10;
//val2=5;
//line 10 executed (new variable environment +execution threads)