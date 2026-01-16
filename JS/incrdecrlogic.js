
let x = 0
let  count=document.getElementById("count")


let increment=()=>{
    x++
    console.log("increment" , x);
    count.innerText=x;
    
}

let decrement=()=>{
    x--
    console.log("decrement" , x);
    count.innerText=x;
    
}

let reset=()=>{
    x=0
    console.log("reset" , x);
    count.innerText=x;
    
}