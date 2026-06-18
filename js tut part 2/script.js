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

