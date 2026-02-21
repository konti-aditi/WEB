
let promise = new promise((resolve,reject)=>
{
    let X = true;

    if(X){
        resolve ("Order delivered")
    }
    else{
        resolve("order failure")
    }
})

console.log(promise);



promise.then(function(res){
    console.log(res);
    
})

promise.catch(function(res){
    console.log(res);
    
})

promise.finally(function(res){
    console.log("promise completed");
    
})



//can also be written as


promise.then(function(res){
    console.log(res);
    
}).catch(function(res){
    console.log(res);
    
}).finally(function(res){
    console.log("promise completed");
    
})


//promise chaining


let display = new promise((resolve,reject)=>{
    resolve(10);
})

display.then((res)=>{
    console.log(res*2);
    return res*2
    
}).then(()=>{
    console.log("result");
    
}).then(()=>{
    console.log(res);
    return res*2
    
})