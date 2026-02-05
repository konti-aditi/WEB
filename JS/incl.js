

let cardData = ["mobile" , "washingmachine" , "shirt" ,"watch"]


// console.log(cardData.includes("watch"));

let searchProducts =()=>{
    let productName = document.getElementById("productname").value;
    console.log(productName);

    let modifyProducts = cardData.map((ele)=>{
        return ele.toLowerCase()
    })

    // console.log(modifyProducts);
    
    // console.log(modifyProducts.includes(productName.toLowerCase()));

    let dataDiv = document.getElementById("dataDisplay")
    console.log(dataDiv);


    if(modifyProducts.includes(productName.toLowerCase()))
    {
        dataDiv.innerText = productName.toLowerCase();
    }
    else
    {
        dataDiv.innerText = "data not found"
    }
    
    
    
}
