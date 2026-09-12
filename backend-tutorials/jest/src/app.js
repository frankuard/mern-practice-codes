const express = require('express');
const { registerUserValidationRules } = require('./middlewares/validation.middleware');

const app  = express();


app.post("/register",registerUserValidationRules,(req,res) => {

    const {username, email, password} = req.body;

    res.status(201).json({message: "User registered succesffuly", user:{
        username,email
    }})
})

module.exports = app;