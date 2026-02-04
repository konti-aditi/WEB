
//1. if a string starts with the same first 3 letters

let str1 = "mitochondria"
let str2 = "mitochondria is a powerhouse of cell"


let threeChar = str1.slice(0,3);


if(str2.slice(0,3).includes(threeChar)){
    console.log("string starts w' same 3 letters");
    
}
else{
    console.log("String doesn't start w' same first 3 letters");
    
}


//2.Extract first word from "welcome home" using slice + indexOf

let name = "Welcome Home";

let first = name.indexOf(" ");

let firstWord = name.slice(0,first);

console.log(firstWord);




//3. convert a string into uppercase and then extract characters from index 2 to 5 using slice.

let str3 = "microprocessor"

let upper1 = str3.toUpperCase();

let extract = upper1.slice(2,5)

console.log(extract);



//4.find last two character of "Chennai " using slice
let str4 = "Chennai"

let words = str4.slice(-2)

console.log(words);



//5.convert GoOd MoRnInG fully into lowercase using toLowerCase
let str5 = "GoOd MoRnInG"

let upper2 = str5.toLowerCase()

console.log(upper2);



//6.check if "India is my country" contains my using substring
let str6 = "India is my country"

let my = str6.includes("my")

console.log(my);



//7.extract "Script "from JavaScript using substring
let str7 = "JavaScript"

let sub = str7.substring(4)

console.log(sub);


//8.convert full string "proud" to uppercase and check if it includes "PRO"
let str8 = "proud"

let upper = str8.toUpperCase()

let incl = str8.includes("pro")

console.log(incl);



//9.what is the result of split("a") on "banana"
let str9 = "banana"

let spl = str9.split("a")

console.log(spl);


//10.check weather the string "Aravind Kumar" contains "Kum" (case sensitive)

let str10 = "Aravind Kumar"

let contains = str10.includes("Kum")

console.log(contains);










