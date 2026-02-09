// class Car{
//     constructor(brand,price,color){
//         this.brand = brand
//         this.price = price
//         this.color = color

//     }
// }




let mobileobj={
    brand:"iphone" , 
    price:9999,

     city : {
        name:"Pune", 
        area: "deccan" ,

    },

    models:["iphone15" , "iphone16" , "iphone17"]
}


console.log(Object.keys(mobileobj));
console.log(Object.values(mobileobj));
console.log(Object.entries);
console.log(Object.freeze(mobileobj));
console.log(Object.isSealed(mobileobj));
console.log(Object.isFrozen(mobileobj));
console.log(Object.seal(mobileobj));









