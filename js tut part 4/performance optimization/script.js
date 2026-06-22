// Debouncing


function debounce(fnc,delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args);
        }, delay);
    }
}

document.querySelector("input").addEventListener("input", debounce(function () {
    console.log("Hee Hee");
},1000)

);

// Debouncing is the like the time delay between the event and the thing to get printed on console