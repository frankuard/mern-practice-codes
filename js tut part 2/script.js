let a = document.querySelector("a");

a.href = "https://www.google.com"

console.dir(a)

a.setAttribute("href","https://www.gmail.com")

console.log(a.getAttribute("href"))

a.removeAttribute("href")


let p = document.querySelector("p");


// SINGLE CLICK
p.addEventListener("click",function () {
    p.style.color = "green"
})

// DOUBLE CLICK 

p.addEventListener("dblclick", function () {
    p.style.color = "yellow"
})
 

let sel= document.querySelector("select");

let device = document.getElementById("device-selected")

sel.addEventListener("change", function (dets) {
    
    console.log(dets.target.value);
    device.textContent = `${dets.target.value} Device Selected`;
})


let h1 = document.querySelector("h1");

// APPROACH

window.addEventListener("keydown", function (dets) {
    
    console.log(dets)
   

    if (dets.key === ' '){
        h1.textContent = "Space";

    }
    else{

         h1.textContent = dets.key;
    }

})





