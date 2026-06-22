
fetch("https://randomuser.me/api/?results=3")


.then(raw => raw.json())
.then((data) => {
    data.results.forEach(function(user) {
        
        
        // Calling it 
        
        let card = document.createElement("div");
        
        let img = document.createElement("img");
        
        let h2 = document.createElement("h2");
        
        let p1 = document.createElement("p");
        
        let p2 = document.createElement("p");
            // Integrating values

            card.className = "bg-white w-80 rounded-2xl shadow-lg p-6 text-center";

            img.src = user.picture.large;
            img.alt = "User Avatar";
            img.className = "w-24 h-24 rounded-full mx-auto border-4 border-blue-500";

            h2.className = "text-2xl font-bold mt-4";
            h2.textContent = user.name.first + user.name.last;

            p1.className = "text-gray-500";
            p1.textContent = "Frontend Developer";

            p2.className = "text-gray-600 mt-3";
            p2.textContent = user.email;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);

            document.querySelector(".users").appendChild(card);
        });
    });


