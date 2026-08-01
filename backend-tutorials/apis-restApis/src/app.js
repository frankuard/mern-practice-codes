// To create server

const express = require('express');


const app = express()

app.use(express.json());

const notes = [

]
// POST

app.post('/notes',(req,res) =>{

    notes.push(req.body)

    res.status(201).json({message: "Notes Created Successfully"})
})

// NOTE: The HTTP/ REST APIS Methods are from frontend perspective and not server i.e. the GET means frontend gets the data from server and POST means the frontend posts the data to backend


// GET
app.get('/notes',(req,res) =>{

    res.status(200).json({
        message: "Notes Fetched Succesfully",
        notes: notes
    })
})

// DELETE

app.delete('/notes/:index',(req,res) =>{

    const index = req.params.index

    delete notes[index]
    res.status(200).json({
        message: "Note Deleted Succesfully",
    })
})

app.patch('/notes/:index',(req,res) =>{
    const index = req.params.index

    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "Note updated successfully"
    })
})

module.exports = app