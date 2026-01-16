

let outerFunc=()=>{
    let a = 100;
    console.log("outer Function");
    
    console.log(a);

    let innerFunc=()=>{
        let b = 200;
        console.log("innerFunction");
        
        console.log(b);
        
    }
    innerFunc()

    let secondFunc=()=>{
        console.log(b);
        
        console.log("SecondFunc");
        
    }
    secondFunc()
    
}
outerFunc()