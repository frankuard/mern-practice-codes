const ul = document.querySelector("ul");
const space = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li);
    
}

ul.appendChild(space);

// We use document fragment to send the data into the memory so it dosent refresh DOM each time it is appending the values 
