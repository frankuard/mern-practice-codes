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
        if (val <= bankBalance){
        bankBalance -= val;
        console.log(bankBalance)
        }
    }

    return {
        check: checkBalance,  // Adding the name to be sent as is the difference between module revealing pattern and reve
        set: setBalance, 
        draw: withdraw}
})();

Bank.withdraw(11000)


// Factory Function