// let arr=[10,20,30,40,50,60,70]


// let[a,b,c,d] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// let mobileObj = {
//     brand:"MI" ,
//     price:48540,
//     color:"black" ,
//     stock:false ,

//     store :{
//         city:"pune" ,
//         store:"deccan"

//     } ,

//     models:["iphone15", "iphone16" ,"iphone17 "]



// }



// let {brand,price,...obj} = mobileObj



// //rest & spread


// let arr1=[10,20,30,40]
// let arr2 = [50,60,70,80]

// let arr3 = [...arr1,...arr2]

// console.log(arr3);



// let obj1={
//     num1: 10,
//     num2:20,
//     num3:30
// }

// let obj2 ={
//     num4:40,
//     num5:50
// }

// let obj3 = {...obj1,...obj2}

// console.log(obj3);



// let arr1=[10,20,30,40]


// let demo=([a,b,c,d])=>{
//     console.log(a);
    

// }

// demo(arr1)


// let car={
//     brand:"BMW",
//     price: 45874698,
//     color:"black"
// }


// let display=({brand,price,color})=>{

//     console.log(brand);
//     console.log(price);
//     console.log(color);

// }
// display(car)





let user ={
    name:"doremon" ,
    mobile:4835786
}

localStorage.setItem("userobj", JSON.stringify(user))

let X = JSON.parse(localStorage.getItem("userobj"))

console.log(X);
