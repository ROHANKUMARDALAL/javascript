//  const timuser= new Object() // it is singleton object

const timuser ={}   // it is non singleton object

timuser.id= "123abc"
timuser.name="Rohan"
timuser.IsloggedIn= false
// console.log(timuser);

const reguUser={
    email:"abcscsc.com",
    fullname:{
        firstname:"rohan",
        surname:"Dalal"
    }
}
// console.log(reguUser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2} // not recommended
// const obj3= Object.assign({},obj1,obj2)   // merging two or more objects into one another object

// const obj3 ={...obj1, ...obj2} // recommended it is also use to merge 2 or more objects
// console.log(obj3);


const user=[
    {
      id:1,
      name:"abc"
    },
    {
        id:2,
        name:"def"
    }
]

user[1].name
//console.log(timuser);

//console.log(Object.keys(timuser));

//console.log(Object.values(timuser));


//console.log(Object.entries(timuser));
//console.log(timuser.hasOwnProperty('IsloggedIn')); // use to check the value is present in object or not



const course={
    name     :  "JS",
    price    :  "999",
    teacher  :  "hitesh"
}

//course.teacher

const {teacher}= course
console.log(teacher);//destructuring of an object
//{
    //"name"   :  "Rohan Dalal",
    //"Course" :  "JS",
    //"price"  :  "Free"
//}

[
    {},
    {},
    {}
]//format of an API may be as An object or sometimes may be as AN Array



// react k kuch part
// const navbar=({company})=>{

// }
// navbar(company='Rohan')

