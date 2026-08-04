const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require('mongoose');


async function connectDB() {
    
    await mongoose.connect("mongodb+srv://roshankarki4956_db_user:I3D5Zy3Oqq5Upcmw@backend-tutorial.fppqy4w.mongodb.net/project-1")

    console.log("Connected to DB");
}

module.exports = connectDB