

// Global Scope 

console.log(this);

// FUNCTION SCOPE

function abcd() {
    console.log(this);


}

console.log(abcd());



// METHOD SCOPE

let obj = {
    name: "Roshan",
    age : 18,
    sayName: function () {
        console.log(this.age);
    },
};

obj.sayName();  // If this was arrow function then this will loose its value because its es6 also if there is nested function then it will also loose its value 


// Event Handling 

document.querySelector("h1").addEventListener("click", function () {
    console.log(this.style.color = "red")
})


// NOTE : 
// global  is window  
// function is window
// method with es5 function is object 
// method with es6 arrow function is window
// es5 function inside es5 function is window
// arrow function inside es5 function is object
// event handler is Element
// class is blank object





