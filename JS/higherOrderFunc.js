
let higherFunction=(a, b,cb)=>{
    console.log(a);
    console.log(b);
    cb()
}
higherFunction(10, "hii", function(){
    console.log("Hello World");
    
})
