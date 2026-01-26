let str = "Java and java script"

console.log(
    str.replace("Java" , (match)=>{
        return match.toUpperCase();

    }),

);

console.log(
    str.replaceAll("Java" , (match)=>{
        return match.toUpperCase();
    }),
);


//by the help of regular expression

console.log(str.replace(/java/gi, "html")); //g is global and i used to remove case sensitiveness





