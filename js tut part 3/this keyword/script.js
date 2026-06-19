

// Global Scope 

console.log(this);



function abcd() {
    console.log(this);


}

console.log(abcd());



let obj = {
    name: "Roshan",
    sayName: function () {
        console.log(this);
    }
};
