// Separation of Concerns

const btn= document.querySelector("button");
const ul = document.querySelector("ul");



function add(n1,n2) {
    return n1 + n2;
}


btn.addEventListener("click",() => {  // Doing just plain addition is a very bad practice you need to seperate DOM and logic  so we will divide into a function based section
    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);

    let add = add(num1,num2);
    let li = document.createElement("li");
    li.textContent = add;
    ul.appendChild(li);
})


