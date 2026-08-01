// To create server

const express = require('express');


const app = express()

app.use(express.json());

const notes = [

]

app.post('/notes',(req,res) =>{

    notes.push(req.body)

    res.status(201).json({message: "Notes Created Successfully"})
})

// NOTE: The HTTP/ REST APIS Methods are from frontend perspective and not server i.e. the GET means frontend gets the data from server and POST means the frontend posts the data to backend


module.exports = app