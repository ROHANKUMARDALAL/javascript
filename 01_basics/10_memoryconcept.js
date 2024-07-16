 //stack memory
 //Heap memory



 //stack(Primitvie) in stack  Copy is created .   
 //heap (non-primitve) in heap reference is given to new data any chajnges makes in all the present
 // of same data
 

let myname="rohandalal"
let anothername=myname

 anothername = "Mohit"
console.log(myname)
console.log(anothername);


let user1 ={//non primitive data type
    email: "rohankumar.rc@gmail.com",
    upiid:"abc.axiom"
}
let user2=user1

user2.email="abced.@ggg.com"

console.log(user1.email)

console.log(user2.email)