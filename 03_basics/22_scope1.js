// // let a=300;

// // if(true){
//     // let a=10; //local variables
//     // const b=20; //local variables

//     // console.log(`Inner value of a = ${a}`);

//     // var c=30; not recommended to use "var" variables bcz it will also print the value outside the block which is not good for coding 
// // }

// // console.log(a);
// //console.log(b);
// // console.log(c);


// // function one(){
// //     const username="Rohan"
// //     function two(){
// //         const website="youtube"
// //         console.log(username);
// //     }
// //     //  console.log(website);
// //         two();
// // }

// // one();

// if(true){
//     const username= "Rohan"
//     if(username === "Rohan")
//     {
//         const website ="youtube"
//         console.log(`${username}  ${website}`);
//     }
    //console.log(website); //it gives error bcz of scope it will print or use only inside their {} blocks

// }
//console.log(username); //it gives error bcz of scope it will print or use only inside their {} blocks

// _______Interesting_______


console.log(addOne(3));

function addOne(num){
    return num+1;
}


const addTwo = function(num){
    return num+1;
}
console.log(addTwo(5));