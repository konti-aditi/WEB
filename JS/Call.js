

let student1 = {
    name: "Aditi" ,
    mobile: 4735648635094,

    address:{
        name:"XYZ"

    }
}

let student2 ={
    name: "Sakshi" ,
    mobile:48233245666,
}

let printStudent = {
    display: function (a = "xyz" , b=0){
        console.log(this.name, a, b);
        
    }
}



printStudent.display.call(student1, "MET" , 123)
printStudent.display.call(student2, "MIT" , 987)

printStudent.display.apply(student1, ["FC" , 345])


let X = printStudent.display.bind(student1 , "RYK" , 3345)

X()


let emp1 ={
    name: "ADT" ,
    salary: 4000
}

let emp2={
    name: "aditya" , 
    salary:234
}

let calculateTotalSalary = {
    displaySalary: function(bonus){
        let total = this.salary+bonus

        console.log(`Total Salary for ${this.name} is ${total}`);
        
    }
}


calculateTotalSalary.displaySalary.call(emp)
