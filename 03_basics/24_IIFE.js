//Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE function
    console.log('DB CONNECTED');
})(); //in this IIFE method ";"SemiColon is must to terminate the function

(
    (name)=>{
        console.log(`DB CONNECTED TWO ${name}`);
    }
)('ROhan')//calling a function immediate
// chai();