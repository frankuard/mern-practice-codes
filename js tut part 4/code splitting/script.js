// Code Splitting 

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let heavy = await import("./heavy.js");
    heavy.HeavyCode();
})