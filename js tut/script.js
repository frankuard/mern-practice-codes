
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


// INSTANCE OF 

a = []

console.log(a instanceof Array)

console.log(a instanceof Object)

console.log(a instanceof Set)

