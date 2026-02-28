document.getElementById("loginForm").addEventListener("submit" , function(event){
    event.preventDefault();

    let usernameInput=document.getElementById("username");
    let passwordInput = document.getElementById("password");

    
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();


    let isValid = true;


    if(username === ""){
        document.getElementById("userError").innerText = "Username is required" ;
        usernameInput.classList.add("input-error");
        isValid = false;
    }
    else{
        document.getElementById("userError").innerText = "";
        usernameInput.classList.remove("input-error");
    }


    if(password===""){
        document.getElementById("passError").innerText = "Password is required" ;
        passwordInput.classList.add("input-error");
        isValid = false;
    }
    else{
        document.getElementById("passError").innerText = "";
        passwordInput.classList.remove("input-error");
    }

    if(isValid){
        alert("Login Successful");
    }
});