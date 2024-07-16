let a=300;

if(true){
    let a=10; //local variables
    const b=20; //local variables

    console.log(`Inner value of a = ${a}`);

    // var c=30; not recommended to use "var" variables bcz it will also print the value outside the block which is not good for coding 
}

console.log(a);
//console.log(b);
// console.log(c);