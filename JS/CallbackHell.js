// let getUser = (id,cb)=>{
//     let user = {id:id, name:"Om"}
//     cb(user)
// }

// let getOrders = (id, cb)=>{
//     let orders = ["Mobile" , "Laptop"]
//     cb(orders)
// }

// getUser("#1" , (user) =>{

//     getOrders(user.id, (orders)=>{
//         getOrders(user.id,(orders)=>{
//             getOrderDetails(order[0] , (product)=>{
//                 console.log(product);
                
//             })
//         })

//     })

// })


//fetch method()


let users = fetch(" insert url here")
console.log(users);
users.then((res)=>{
    console.log(res);
    return res.json();
}).then((res)=>{
    console.log(res.users);
}).catch((res)=>{
    console.log(res);
}).finally(()=>{
    console.log("completed");
})




