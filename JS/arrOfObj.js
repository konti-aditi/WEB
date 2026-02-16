
let Books = [

    {
        bookName: "Atomic Habits" ,
        author: "James Clear" ,
        price: 199,
        languages: ["Marathi" , "hindi" , "english"] ,
        genre: ["self help" , "non fiction"],
        stock: true

    } ,

    {
        bookName: "Shyam chi aai" ,
        author: "Sane guruji" ,
        price: 299,
        languages: ["Marathi" , "hindi" , "english"] ,
        genre: ["self help" , "non fiction"] ,
        stock: true

    } ,

     {
        bookName: "Chaava" ,
        author: "Shivaji Savant" ,
        price: 509,
        languages: ["Marathi" , "hindi" , "english"] ,
        genre: ["self help" , "non fiction"] ,
        stock:false

    } ,

     {
        bookName: "Harry Potter" ,
        author: "JK Rowling" ,
        price: 499,
        languages: ["Marathi" , "hindi" , "english"] ,
        genre: ["Thriller" , "fiction" , "drama"] ,
        stock: false

    } 

]



// Books.forEach((ele)=>{

//     console.log(ele.author.toUpperCase());
    
//     console.log(ele.bookName.split(" ")[0]);

// })


// let stockBooks = Books.filter(()=>{

//     return ele.stock
// })

// console.log(stockBooks);


// stockBooks.forEach(()=>{
//     console.log(ele.bookName);
    
// })


let lang = Books.filter((ele)=>{

     return ele.languages.includes("Hindi")
     
})

console.log(lang);


// let price = Books.price(()=>{
    
//     console.log(Books.price>499);
    
// })


let genre = Books.filter((ele)=>{

     return ele.genre.includes("drama")
     
})

console.log(lang);




let filterred = Books.filter((ele)=>{

    return ele.price>499&&includes("Hindi")

})

console.log(filterred);







