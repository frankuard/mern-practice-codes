import mongoose from "mongoose";
import config from "./config";


async function connectDB() {
    
    await mongoose.connect(config.MONGO_URI)

    console.log("Connected to DB");
}


export default connectDB;
