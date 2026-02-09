

let multipleUsers = []


function register(){

   let X = localStorage.setItem(username).value

    let Y = localStorage.setItem(password).value

    let user ={
        name: username ,
        mobile:usermobile
    }

    multipleUsers.push(user)

    console.log(multipleUsers);
    
 
    

}


