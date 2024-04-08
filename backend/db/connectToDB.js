import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_DB_URI);
        console.log("Connection Successful to Mongodb");
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
}

export default connectToDB;