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


let form  = document.querySelector("form");
let name = document.querySelector("#name");
let bio = document.querySelector("#bio");
let email = document.querySelector("#email");

const userManager = {

    users : [],
    init: function () { form.addEventListener("submit", this.submitForm.bind(this))},
    submitForm:  function (e) {
        e.preventDefault();
        this.addUser();
    },
    addUser: function () {
        this.users.push({
            username : name.value,
            bio : bio.value,
            email : email.value,

        })

        form.reset();
    },
    removeUser: function () {},

}


userManager.init()


