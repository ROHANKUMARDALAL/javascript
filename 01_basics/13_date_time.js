let myDate=new Date();

//console.log(myDate)
 //console.log(myDate.toString());
 //console.log(myDate);


// console.log(myDate.toDateString())

//console.log(myDate.toISOString());

//console.log(myDate.toLocaleString());

//console.log(typeof(myDate));
//the datatype of date is object


let myCreatedDate=new Date(2024,6,16);
// console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);

//console.log(myCreatedDate.getTime());// time in miliseconds

// console.log(Math.floor(Date.now()/1000)); //time in seconds

let newDate=new Date()

// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "short",
})