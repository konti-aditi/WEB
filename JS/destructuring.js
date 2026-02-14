
//array destructuring
let arr = [10,[20,21],30,40,50,60,70]
console.log(arr);


let[a,[b,c],d,e,f] = arr

console.log(a);
console.log(b);
console.log(c);



//object destructuring
let car = {
    brand:"BMW" ,
    price: 12345,
    color:["red" , "black"]

}

let {price,brand,color} = car

console.log(price);
console.log(brand);
console.log(color);








