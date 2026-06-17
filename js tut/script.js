
function testing() {
    
    if (true){
        var a = 12; // Var is function scoped
        let b = 15; // Let is block scoped
        const c = 14; // const is function scoped
        
         console.log(b)
         console.log(c)
    }
    console.log(a)  
   
}

testing()


// Temporal Dead Zone

// DISTANCE BETWEEN THE PRINT AND DECLARATION IS TDZ
// IF YOU DO THIS WITH A VAR IT WILL GIVE YOU 'UNDEFINED'
// console.log(a);
// let a = 12;


