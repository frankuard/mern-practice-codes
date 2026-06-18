
function testing() {

    if (true) {
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


let a = 12; // PRIMITIVE
b = a; // REFERENCE

let c = [1, 2, 3];
let d = c;

c.pop(); // REMOVING ANYTHING ON C WILL IMPACT D ASWELL BECAUSE IT IS REFERENCE ONE

let we = null;  // INTIALIZING A NOTHING VALUE TO UPDATE LATER ON

let us = undefined; // MAKING A VARIABLE AND NOT GIVING IT VALUE

// BIGINT

let maxInt = 9007199254740991n;



// TERNARY

12 > 13 ? console.log("true") : console.log("false");
let score = 25

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

console.log(grade)


// INSTANCE OF 

a = []

console.log(a instanceof Array)

console.log(a instanceof Object)

console.log(a instanceof Set)


// UNARY 

let num = 5;
num++
console.log(num)

let num2 = 7
++num2;
console.log(num2)

let x1 = 3;
let y1 = x1++;
console.log(x1, y1)

let x2 = 3;
let y2 = ++x2;
console.log(x2, y2)


// THE ... OPERATOR 

// THIS IS REST PARAMETERS


function abcd(a, b, c, ...val) {
    console.log(a, b, c, val)
}

abcd(1, 2, 3, 4, 5, 6);


function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        console.log(val)
        total += val;
    });
    return total;
}

console.log(getScore(10, 12, 14, 18));


// EARLY RETURN PATTERN

function checkAge(age) {

    if (age < 18) return "Too Young"; return "Allowed"

}

console.log(checkAge(12))
console.log(checkAge(24))

//  Empty one

function f() {
    return;
}

console.log(f());

// HIGHER ORDER FUNCTION

// function xyz(val) {

// }

// xyz(function() {

// })

// CLOSURE

// function abcd() {
//     let val = 0;
//     return function () {
//         console.log(val)
//     }
// }


// IIFE 

(function () {
    let score = 0;
})();



// ARRAYS

// let arr = [1, 2, 3, 4]
// arr.pop()
// arr.push(34)

// arr.shift();
// console.log(arr)
// arr.unshift(1);
// console.log(arr)

// arr.splice(2, 2); // THIS CHANGES THE ORIGINAL ARRAY
// console.log(arr)


// arr.slice(2, 1); // THIS DOES NOT CHANGE THE ORIGINAL ARRAY
// console.log(arr)


// arr.reverse();


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.forEach(function (val) {
    console.log(val + 5)

})

let newArr = arr.map(function (val) {
    return 12;
})

let ans = [1, 2, 3, 4, 5, 6]

let newAns = ans.reduce(function (accumulator, val) {
    return accumulator + val
}, 0);



// SPREAD OPERATOR

let array1 = [1, 2, 3, 4, 5]

let newArray  = [...array1]; // THIS IS USED TO COPY INSTEAD OF REFERENCE


// MERGING TWO ARRAY WITH SPREAD OPERATOR

let m = [1,2];
let n = [3,4];

let p = [...m,...n]


// ADD NEPAL TO THE START OF THIS ARRAY USING SPREAD

let countries = ["USA","UK"]
countries = ["Nepal",...countries]



let obj = {
    name: "roshan",
    age: 18,
    email: "test@test.com",
    address:{
        city: "biratnagar"
    },
};

// let obj2 = {...obj};
// obj2.address.city = "Kathmandu";

// NOTE :  IF AN OBJECT HAS NESTED VALUES THEN IT WONT BE CLONED BY SPREAD OPERATOR

// DEEP CLONING

let obj2 = JSON.parse(JSON.stringify(obj))
obj2.address.city = "Kathmandu";

// OPTIONAL CHANING

obj?.addresses?.city
