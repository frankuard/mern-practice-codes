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

    return {checkBalance, setBalance, withdraw}
})();

Bank.withdraw(11000)