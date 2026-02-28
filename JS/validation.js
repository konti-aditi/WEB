// let collectionbox = document.getElementsByClassName("box")
// let nodebox = document.querySelectorAll(".box")
// let div = document.createElement("div")
// div.className= "box"
// div.style.height="100px"
// div.style.width="100px"
// div.style.color="green"
// document.body.append(div)
// console.log(collectionbox);
// console.log(nodebox);


// let headingCollection = document.getElementsByClassName("heading")
// let headingNodeList = document.querySelectorAll(".heading")
// console.log(headingCollection);
// console.log(headingNodeList);



// headingNodeList.forEach((ele)=>{
//     ele.style.color="red"
// })


// for(let i=0; i<headingCollection.length; i++){
//     headingCollection[i].style.backgroundColor="grey"
// }



//for in loop
//iterates till the length of the object
let user={
    name:"aditi" ,
    age:0 ,
    city:"pune"
}


for(let a in user){
    console.log(a, user[a]);
    
}

//used for arrays
let arr = [10,20,30,40]

for(let b of arr){
    console.log(b);
    
}

let str = "Hello"

for(let x of str)
{
    console.log(x);
    
}






