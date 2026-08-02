const mongoose = require('mongoose');


// To tell what kind of data we need to store
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

// Create Note Model to perform CRUD Operations
const noteModel = mongoose.model("note",noteSchema)

module.exports = noteModel