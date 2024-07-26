const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map((num)=>{ return num+10})

const newNums= myNumbers
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>50)
// console.log(newNums);



const myArr=[1,2,3,4]
// const arrtotal=myArr.reduce(function(accumalator, currentvalue){
//     console.log(`accumalator: ${accumalator}`);
//     return accumalator+ currentvalue
// },0)
// console.log(arrTotal);



// const arrTotal=myArr.reduce((acc,currval)=>acc+ currval,0)
// console.log(arrTotal);

const courseCart=[
    {
       itemName:"js Course",
       price:999
    },
    {
        itemName:"React Course",
        price:1999
     },
     {
        itemName:"PY Course",
        price:2999
     },
     {
        itemName:"DSA Course",
        price:3999
     },
]

const totalPrice=courseCart.reduce((acc , item )=>{return acc+item.price},0)
console.log(totalPrice);