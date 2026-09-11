const express = require('express');

const app  = express();


app.post("/register",(req,res) => {

    const {username, email, password} = req.body;
})

module.exports = app;