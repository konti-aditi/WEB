// let student = {
//     name: "Aditi" ,
//     mobile: "12232345555" ,

//     skills:["HTML" , "CSS" , "JS" , "JAVA"] ,

//     // display: function(){

//     //     console.log("function called");
//     //     console.log(this.name);  // we cannot use this keyword in arrow function otherwise it will point to the window object
//                                     //but  we can access it using the lexical scoping
        
        
//     // }

//      display:()=>{

//         console.log("function called");
//         console.log(this.name); 


//         let innerFunc = ()=>{
//             console.log(this);
            
//         }
        
//     }
// }

// console.log(student.name);
// console.log(student.mobile);
// console.log(student.skills);




// student.skills.forEach(ele => {

//     console.log(ele);
    
    
// });

// // student.display();



// let student1={
//     name:"Aditi" ,
//     mobile:234785766,
// }

// let student2={
//       skills:["HTML" , "CSS" , "JS" , "JAVA"] ,

// }

// let student3={
//     name:"Aditys" ,
//     mobile:5876985
// }


// let student = Object.assign(student1,student2,student3)

// console.log(student);



let obj1 = {
    name:"Aditi" ,
    id:123
}

let obj2={
    mobile:34565768789,
    address:"pune"
}


Object.assign({},obj2,obj1)


console.log(obj2);
console.log(obj1);



