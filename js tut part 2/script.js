let a = document.querySelector("a");

a.href = "https://www.google.com"

console.dir(a)

a.setAttribute("href","https://www.gmail.com")

console.log(a.getAttribute("href"))

a.removeAttribute("href")

