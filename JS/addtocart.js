
function gotoCart() {
    window.location.href = "cartPage.html"
}

let btn = document.getElementById("remove");
let btn2 = document.getElementById("watchBtn");
let btn3 = document.getElementById("perfumeBtn")

function addWatch() {
    let cart = localStorage.getItem("cart") || "";

    btn.style.display = "block";
    btn2.style.display = "none";
    console.log("inside watch");

    if (!cart.includes("watch")) {
        cart += "watch,";
        localStorage.setItem("cart", cart);
        btn.innerText = "Added";
    }

}

function addPerfume() {
    let cart = localStorage.getItem("cart") || "";

     btn.style.display = "block";
    btn2.style.display = "none";
    console.log("inside watch");


    if (!cart.includes("perfume")) {
        cart += "perfume,";
        localStorage.setItem("cart", cart);
       
    }

}

function addTV() {
    let cart = localStorage.getItem("cart") || "";

    if (!cart.includes("tv")) {
        cart += "tv,";
        localStorage.setItem("cart", cart);

        let btn = document.getElementById("tvBtn");
        btn.innerText = "Added";
        btn.disabled = true;
    }
}



