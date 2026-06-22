// Module Pattern

// IIFE

let Bank = (function () {
    let bankBalance = 12000; // Private Balance

    function checkBalance() {
        console.log(bankBalance)
    }

    function setBalance(val) {
        bankBalance = val;
    }

    function withdraw(val) {
        if (val <= bankBalance) {
            bankBalance -= val;
            console.log(bankBalance)
        }
    }

    return {
        check: checkBalance,  // Adding the name to be sent as is the difference between module revealing pattern and reve
        set: setBalance,
        draw: withdraw
    }
})();



// Factory Function Pattern


function createProduct(name, price) {
    let stock = 10;
    return { // We can create these as a blueprint without classes and objects so it is factory function pattern
        name,
        price,
        buy(qty) {
            if (qty <= stock) {
                stock -= qty;
                console.log(`${qty} pieces booked - ${stock} pieces left.`);

            }

            else {
                console.log(`We only have ${stock} pieces left.`)
            }

        },

        refill(qty) {
            stick += qty;
            console.log(`Refilled the Stock - ${stock} pieces left.`)
        }
    }
}

let iphone = createProduct("Iphone", 70000)
let kitkat =  createProduct("Kitkat", 10) // Both uses two different memory allocations for each of it. Unlike IIFE which creates only one it can create multiple

iphone.buy(6)


// Observer Pattern

class YoutubeChannel {
    constructor() {
        this.subscribers = [];

    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name}, You have subscribed the channel.`)
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter(sub => sub !== user);
        user.update(`You have unsubscribed the channel.`)
    }
    notify(message){
        this.subscribers.forEach(sub => sub.update(message));
    }
}


class User {
    constructor(name) {
        this.name = name;
    }

    update(data){
        console.log(`${this.name} ,${data}`);
    }
}

let mrbeast = new YoutubeChannel();
let user1 = new User("Roshan");
let user2 = new User("Tobi");

mrbeast.subscribe(user1);
mrbeast.subscribe(user2);

mrbeast.notify("New Video Uploaded by MrBeast");



   