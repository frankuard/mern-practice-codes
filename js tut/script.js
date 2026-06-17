
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

