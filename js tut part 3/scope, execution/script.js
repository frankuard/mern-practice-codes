// Execution Content


// Memory Phase

// Execution Phase



function abcd() {
    
    // var a = 12;
    // var b = 13;
    // var c = 14;
    console.log(a)
}


// Lexical Scope


function defg() {
    let a = 12;
    function ghij() {
        console.log(a);
    }
}

// Dynamic Scope  This is not followed by any programming languages as per now 

let a = 12

 function defg(){
    let a = 13
    abcd();
 }

 defg()  // If it was dynamic it would print 13 but since it is lexical it uses global one which is 12
