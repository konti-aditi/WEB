// let a = document.getElementById("heading")
// console.log(a);
// console.log(a.innerText);
// console.log(a.innerHTML);
// console.log(a.textContent);




// let b = document.getElementsByClassName("para")
// console.log(b);

// let c = document.getElementsByName("para")
// console.log(c);

// let d = document.getElementsByTagName("p")
// console.log(d);

// // let e = document.getElementsByTagNameNS("p")
// // console.log(e);


// let f = document.querySelector("para")

// let g = document.querySelectorAll("p")

// // console.log(a.innerText);
// // console.log(a.innerHTML);
// // console.log(a.textContent);

// let box = document.getElementById("box")
// console.log(box);
// box.innerHTML="<h1>Hello world</h1>"


// let username = document.getElementById("username")
// console.log(user);
// user.innerHtml="<h1>Hello user</h1>";


// let displayUser =()=>{

//     let username = document.getElementById("username").value
//     let usermsg = document.getElementById("usermsg")

//     usermsg.innerText=`Hello ${username}`



// }


// let months = ["jan", "feb" ,"march"]

// let date = new date()
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMiliseconds());
// let dob = new Date("2010-04-18")
// let getYear = date.getFullYear().dobgetFullYear()
// let getMonths=date.getMonth()-dob.getMonth()
// console.log(getYear);



// let box = document.getElementById("box")
// let h1 = document.createElement("h1")
// let h2 = document.createElement("h2")
// h1.innerText="Aditi"
// h2.innerText="SDE"
// console.log(h1);

// box.append("Hello" , h1, h2)



// let names= ["Aditi" , "Pranav" , "Praju"]

//  names.forEach=((ele)=>{
//     let li = document.createElement("li")
//     li.innerText = ele
//     console.log(ele);
//     box.append(li)
    
//  })



let btn = document.getElementById("submitbtn")
let box = document.getElementById("box")

let submitbtn =()=>{
   console.log("Submitbtn is clicked");
   
}

// btn.addEventListener("click" , submitfun)

btn.addEventListener("click" ,(e)=>{
   console.log(e);
   console.log("Submit button is clicked");
   
   
})
box.addEventListener("click" ,()=>{
   console.log("div is clicked");
   
})



let username1 = document.getElementById("username")
username.addEventListener("keydown" , (e)=>{
   console.log(e.target.value);
   
})


let username2 = document.getElementById("username")
username.addEventListener("keyup" , (e)=>{
   console.log(e.target.value);
   
})

let username3 = document.getElementById("username")
username.addEventListener("input" , (e)=>{
   console.log(e.target.value);
   
})


let username4 = document.getElementById("username")
username.addEventListener("change" , (e)=>{
   console.log(e.target.value);
   
})









