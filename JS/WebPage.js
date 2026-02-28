let allProducts = []

let container = document.getElementById("productsContainer")
let displayProducts = (products)=>{
    container.innerHTML = products.map((ele)=>`
        <div class="card">
            <img src="${ele.images[0]}" class="prod-img"></img>
            <h3>${ele.title}</h3>
            <p>price:${Math.round(ele.price*90)}</p>
            <h4>Rating:${"⭐".repeat(Math.round(ele.rating))}${"⭐" .repeat(5*Math.round(ele.rating))}</h4>
        
        </div>
    }`)
}


let fetchingProducts = async () =>{
    let getProducts = await fetch("https://dummyjson.com/products")
    let data = await getProducts.json()
    console.log(getProducts);
    console.log(data.products);
    displayProducts(data.products)
    
    
}
fetchingProducts()

let searchProducts = document.getElementById("searchProducts")

searchProducts.addEventListener("input" , (e) =>{
    let filterProducts = allProducts.filter((ele)=>{
        return ele.title.toLowerCase().includes(e.target.value.toLowerCase())

    })
    console.log(filterProducts);
    displayProducts(filterProducts)
    
})

let addToCart = (id)=>{
    console.log(id);
    let product = allProducts
    
}



// todo: add to cart and remove from cart


