// Before writing "import" mention "type": "module" in package.json file
import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToDB from './db/connectToDB.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json())    // To parse the incoming requests with json payloads (from req.body)

app.use("/api/auth", authRoutes)

// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("Hello World!!");
// })




app.listen(PORT, () => {
    connectToDB();    
    console.log(`Server running on port ${PORT}`)

})