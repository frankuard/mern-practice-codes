console.log("Hello1");
console.log("Hello2");

setTimeout(() => {
    console.log("Hello3");
    
},2000);
console.log("Hello4");



function laterOnTime(value) {
    setTimeout(() => {
        console.log("Hello World");


    }, 1000);
}

laterOnTime();



function TakeProfile(username, cb) {
    setTimeout(() => {
        console.log(`Profile fetched of ${username}`);
        cb({
            _id: 1,
            username,
            age: 18,
            email : "roshan@gmail.com"
        });

    }, 2000);
}


function postExtract(id,cb ) {
    setTimeout(() => {
        cb({_id : id, posts:["Hey","Hello","Good Morning"]});

    }, 4000);
}

TakeProfile("Roshan", function (Data) {
    console.log(Data);
    postExtract(Data._id,function (posts) {
        console.log(posts)
    })
});

// cb is callback function

// Cb Function inside of another cb function is call back hell  so promises exist



