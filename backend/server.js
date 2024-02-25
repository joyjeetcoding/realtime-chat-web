// Before writing "import" mention "type": "module" in package.json file
import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToDB from './db/connectToDB.js';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json())    // To parse the incoming requests with json payloads (from req.body)
app.use(cookieParser());    // To parse the incoming cookie from req.cookies


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("Hello World!!");
// })




app.listen(PORT, () => {
    connectToDB();    
    console.log(`Server running on port ${PORT}`)

})