const express = require('express');

const app = express() // To create server instance 


app.get("/",(req,res) => {
    res.send('Hello World')
})

app.get("/about",(req,res) => {
    res.send("This is about page")
})

app.listen(3000) // To start the server