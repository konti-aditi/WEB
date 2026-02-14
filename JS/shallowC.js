

// let student1 = {
//     name: "vipul" ,
//     mobile: "123456789" ,

//     address:{
//         city:"Pune" 
//     },

//     skills:["HTML" , "CSS" ]
// }

// let obj = Object.assign({} , student1)
// console.log(student1);
// console.log(obj);

// obj.name = "Aditi" 

// obj.address.city= "Mumbai"
// obj.mobile = "09876543"
// obj.skills.push("JS" , "React")

// console.log(obj);
// console.log(student1);



// let car1={
//     brand:"BMW" ,
//     price: 100000,
//     color:["red" , "black"]
// }


// let car2= Object.assign({}, car1)

// car2.brand = "Audi"
// car2.price= 200000
// car2.color.push("Blue" , "White")


// console.log(car1);
// console.log(car2);



// let mobileObj = {
//     brand:"Iphone" , 
//     color:"red" ,
//     price:99999,
//     display: function(){

//     },
//     color:["red" , "back"]
// }

// console.log(mobileObj);
// let X = JSON.stringify(mobileObj)
// console.log(X);
// let y = JSON.parse(X)


// console.log(X.brand);
// console.log(y);








let car1={
    brand:"BMW" ,
    price: 100000,
    color:["red" , "black"]
}


let car2 = JSON.parse(JSON.stringify(car1))

console.log(car2);

car2.color.push("White")
console.log(car1);
console.log(car2);



