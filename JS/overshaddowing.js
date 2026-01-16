

// let a = 10;

// let demo=()=>{

//     var a = 30;
//     console.log(a);
    
// }
// demo()
// console.log(a);


//shadowing

let a = 10;

let demo=()=>{
    var a = 30;
     a=50;

    console.log(a);
    
}
demo()
console.log(a);

