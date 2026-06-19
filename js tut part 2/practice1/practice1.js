let inp  = document.querySelector("input")
let span = document.querySelector("span")

inp.addEventListener("input", function () {
    
    console.log(inp.value.length)
    span.textContent = inp.value.length;
})