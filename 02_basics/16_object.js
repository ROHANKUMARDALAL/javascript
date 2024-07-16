//singleton 

// object literals

// Object.create. //use to create an object with constructor methods


const mysym=Symbol("key1")
const user = {
    name          :   "rohan",
    "fullname"    :   "Rohan Dalal",
    age           :    23,
    [mysym]       :   "key1",
    location      :   "bulandshahr",
    isLoggedIn    :   false
} 

//console.log(user.fullname)
//console.log(user.age); // not recommended

//console.log(user["name"]); // another method is use to access the object elements
 //console.log(user[mysym]);


user.location="delhi"
 // Object.freeze(user) // use to freeze means no furthur change is possible in this object
user.location ="bsr"
user.greeting =function(){
    console.log("hello from rohan dalal");
}

user.greetingTwo =function(){
    console.log(`hello from rohan dalal , ${this.name}`);
}
//console.log(user);
console.log(user.greeting());
console.log(user.greetingTwo());