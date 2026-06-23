// Lazy Loading

let imgs = document.querySelectorAll("img");


const observer =  new IntersectionObserver(function (entries,observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded")
            observer.unobserve(img);
        }
    });
},{
    root : null,
    thresold : 0.1
});


imgs.forEach(img => {
observer.observe(img)
});