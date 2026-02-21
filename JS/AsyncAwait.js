
// let fetchUsers = () =>{
//     console.log("fetching.....");
//     let users = fetch("https://dummyjson.com/users")

// const { use } = require("react");

//     console.log(users);
//     users.then((res)=>{
//         console.log(res);
//         return res.json(res)
        
//     }).then((res)=>{
//         console.log(res);
        
//     })
//     console.log("fetching is completed");
// }

// fetchUsers()



// let fetchUsers = async ()=>{
//     console.log("fetching........");
//     let users = await fetch("https://dummyjson.com/users")
//     console.log(users);
//     let datd = await users.json()

//     console.log(data);

//     console.log("fetching completed");
    
// }
// fetchUsers()



// let fetchUsers = async ()=>{
// try{
//     console.log("fetching........");
//     let users = await fetch("https://dummyjson.com/users")
//     console.log(users);
//     let datd = await users.json()
//     console.log(data);
//     console.log("fetching completed");
    

// }catch{
//     console.log("error");
    
// }
// }
// fetchUsers()


// let displayProducts=(prods)=>{
//     console.log(prods);
//     prods.forEach(ele => {
//         Math.round(console.log(ele.price*90))
        
//     });
    
// }

// let fetchProducts = async() =>{
    
//     try{
//             let products = await("https://dummyjson.com/products")

//             console.log(products);
//             let data = await products.json()
//             console.log(data);
//             allProducts = data.products
//             displayProducts(data.products)   

//     }  catch{
//         console.log("error");
        
//     }

// }
// fetchProducts()


// let displayProducts = (prods)=>{
//     console.log(prods);
//     prods.forEach((ele) => {
//         console.log(ele.title,(ele.price)*90);
//     });
    
// }
// let fetchProducts = async () => {
//     try{
//         let products = await("https://dummyjson.com/products")
//         console.log(products);
//         let data = await products.json()
//         console.log(data);
//         allProducts = data.products
//         displayProducts(data.products)
        
//     }catch{
//         console.log("error");
        
//     }
// }
// fetchProducts()


// let above =()=>{
//     let filterProducts = allProducts.filter((ele)=>{
//         return ele.price * 90 > 1000
//     })
//     console.log(filterProducts);
//     filterProducts.forEach((ele)=>{
//         console.log(ele.title,ele.price*90);
        
//     })
    
// }


// let below =()=>{
//     let filterProducts = allProducts.filter((ele)=>{
//         return ele.price *90 < 1000
//     })
//     console.log(filterProducts);
//     filterProducts.forEach((ele)=>{
//         console.log(ele.title,ele.price*90);
        
//     })
    
// }



console.log("start");

setTimeout(()=>{
    console.log("Hello");
    
},2000)
console.log("End");













