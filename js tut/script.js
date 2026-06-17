
function testing() {
    
    if (true){
        var a = 12; // Var is function scoped
        let b = 15; // Let is block scoped
        const c = 14; // const is function scoped
        
         console.log(b)
         console.log(c)
    }
    console.log(a)  
   
}

testing()


// Temporal Dead Zone

// DISTANCE BETWEEN THE PRINT AND DECLARATION IS TDZ
// IF YOU DO THIS WITH A VAR IT WILL GIVE YOU 'UNDEFINED'

// console.log(a);
// let a = 12;

// HOISITNG

// var a = undefined;

// IN HOSIITING THE DECLARATION GIES UP AND INTIALZIATION GOES DOWN

// console.log(a);

//a = 12;

// console.log(a);

"hositing is  undefined for var"
"const and let hoist dosent have value it is error"


// DATA TYPE SECTION

// PRIMITIVES MA REAL VALUES KO REAL COPY
// REFERENCE MA REAL KO DIDAINA COPY BUT REFERENCE DINCHA


let a  = 12; // PRIMITIVE
b = a; // REFERENCE

let c = [1,2,3];
let d = c;

c.pop(); // REMOVING ANYTHING ON C WILL IMPACT D ASWELL BECAUSE IT IS REFERENCE ONE

let we = null;  // INTIALIZING A NOTHING VALUE TO UPDATE LATER ON

let us = undefined; // MAKING A VARIABLE AND NOT GIVING IT VALUE

// BIGINT

let maxInt = 9007199254740991n;



// TERNARY

12>13 ? console.log("true") : console.log("false");
let score = 25

let grade = score >=90 ? "A" : score >= 75 ? "B" : score>= 60 ? "C" : "Fail";

console.log(grade)


// INSTANCE OF 

a = []

console.log(a instanceof Array)

console.log(a instanceof Object)

console.log(a instanceof Set)


// UNARY 

let num  = 5;
num++
console.log(num)

let num2 = 7
++num2;
console.log(num2)

let x1 = 3;
let y1 = x1++;
console.log(x1,y1)

let x2 = 3;
let y2 = ++x2;
console.log(x2,y2)

