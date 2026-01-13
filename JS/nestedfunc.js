

// function outerFunc(){
//     console.log("OuterFunction");

//     function innerFunction(){
//         console.log("InnerFunction");
        
//     }
//     innerFunction()
    
// }
// outerFunc()



// let outerFunc=()=>{
//     console.log("Outer Function");

//     let innerFunction=()=>{
//         console.log("Inner Function");  
//     };
//     innerFunction()
// };
//  outerFunc()   // if we dont call outer function, then the command will not go to inner function and it will not get executed automatically




 let numSquare=(a)=>{
    // console.log("square is" , a*a); //for normal printing
    return a*a;
 }
let x= numSquare(2) //for using return
console.log(x);
