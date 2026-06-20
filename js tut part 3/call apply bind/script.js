// Call

let obj = {
    name: "roshan",
    age: 12
}

function abcd(a,b,c) {
    console.log(this.age, a,b,c);

}

abcd.call(obj, 1,2,3);


// Calling abcd with obj as parameter

// Bind

abcd.apply(obj,[1,2,3]) // Bind only accepts two parameter  (Used Rarely)


let fnc = abcd.bind(obj,1,2,3); // Copies function 
fnc(); // The obj becomes the main one




const userManager = {

    users : [],
    init: function () { alert(); },
    addUser: function () {},
    removeUser: function () {},

}


userManager.init()


