let score  =  33
let Score1  = "33"


console.log(typeof score);  //console.log(typeof(Score))  both are same
console.log(typeof Score1)

let valnumber = Number(Score1);
console.log(typeof valnumber)   // datatype conversion from string to number
console.log(valnumber) 

// while conversion "33abc" to number it will gives (NaN)      as output but convert it into number(datatpe)
// while converting "33"    to number it will gives (33)       as output but convert it into number (datatpe)
//while converting null   to number it will gives (0)         as output but convert it into number(datatpe)
//while converting undefined  to number it will gives (NaN)   as output but convert it into number(datatpe)
//while converting true    to number it will gives (1)          as output but convert it into number(datatpe)
//while converting flase    to number it will gives (0)         as output but convert it into number(datatpe)


let somenumber =33
let converting =Number(somenumber)

console.log(typeof converting)