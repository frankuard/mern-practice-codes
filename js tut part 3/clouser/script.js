// Clouser 

function abcd() {
    let a  = 12;

    return function () {
    
        console.log(a);
    };
 
} 

let func = abcd()

func();


function clickLimiter() {
    
    let click = 0;
    return  function() {
        if(click<5){
            click++;
           
        }
        else{
            console.error("Errorr!!")
        }
    }
}

clickLim = clickLimiter();

clickLim();
clickLim();
clickLim();



