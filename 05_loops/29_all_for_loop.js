// const arr=[1,2,3,4,5];
// for (const i of arr) {
//     console.log(i);
// }

// const greeting="Hello world!"

// for(const greet of greeting)
// {
//     console.log(`Each char in greteing ${greet}`);
// }

//Maps == will contains only unique values with in same order

const map = new Map()
map.set('IN', 'India')
map.set('SA', 'South Africa')

// console.log(map);

for (const [key,value] of map) {
    //console.log(key ,':-', value)
}



// const myObject = {
//     'game1': 'NFS',
//     'game2' : 'Asphalt8'

// }
// // for (const [key, value] of myObject) {
//     console.log(key, value);
// }


//not use forof for object
// we can use forin for objects

const myObject={
    js: 'javaScript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    
        // console.log(key);
        // console.log(` ${key}  :- ${myObject[key]}`);
    }



// const programing=["js" , "rb" , "py" , "java" , "cpp"]
// for (const key in programing ) {
//     console.log(`${programing[key]}`);
    
// }

const coding=["rb" , "py" , "java" , "cpp" , "foreach for array"]


// coding.forEach( function (value)
// {
//     console.log(value);
// })

// coding.forEach(element => {
//     console.log(element);
// });


function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach((item , index , arr )=>
// {
//     console.log(item , index);
// })

// the above both methods(foreach) are correct to iterate the array



const myCoding =[
    {
       languageName : 'java script',
       teacher: "hitesh choudhary"
    },
    {
        languageName : 'java ',
        teacher: "code with harry "
     },
     {
        languageName : 'c',
        teacher: "jenny "
     },
     {
        languageName : 'DSA',
        teacher: "Love Babbar"
     },
    
]
// myCoding.forEach((item) => {    
//     console.log(`${item.languageName} : ${item.teacher}`);
    
// });
// the above code is an objects inside an array and print/iterate an array with foreach. loop 