 const hero= [ "Rohan" , "abhishek","ashish"]

 const heroien = ["riya","akansha","kajal"]

 //hero.push(heroien) // another array is pushed into first array but act as a single element   

 //console.log(hero)
 //console.log(hero.length)

//  const new1 =hero.concat(heroien)  //it is used to concatinate two array in new array
//  console.log(hero);
//  console.log(new1)

const new1 = [...hero , ...heroien] //  used to concat array  2 or more thn 2 can be concatinate 
// with this method(... array1 , ...array2 , ...araay3)
console.log(new1);


const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //  arrays into  array

const usablearr= newArr.flat(Infinity)  // merge all subarray into single array

console.log(usablearr);

console.log(Array.isArray("rohan")) // used to check is it an array or not

console.log(Array.from("rohan")) // used to form/convert in  an array

// let myArr =[1,2,3,4,5];
// myArr.unshift(9);
// console.log(myArr);

let score1=100

let score2=200

let score3=300

let score4=400
console.log(Array.of(score1,score2,score3,score4));  //. convert different element/variables into single array