const score= 400;


const balance = new Number(100) //to define the datatype in number
console.log(score)
console.log(balance)

console.log(balance.toLocaleString().length)
console.log(balance.toFixed(2)) //To print the decimal values 


const othernumber=1213.678987
console.log(othernumber.toPrecision(5)) //always use 1digit more than natural number

const hundrd= 10000000
console.log(hundrd.toLocaleString('en-IN'))




//_____________________MATHS_________________

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.sqrt(144))
console.log(Math.min(4,9,8,7,1))
console.log(Math.max(4,9,8,7,1))
console.log(Math.random())          //always pick a random value lies btw 0 & 1
console.log((Math.random()*10) +1)


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min)
