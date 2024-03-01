// Before writing "import" mention "type": "module" in package.json file
import path from "path"
import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';


import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js"

import connectToDB from './db/connectToDB.js';

import { app, server } from './socket/socket.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

// Before deploying write this code
const __dirname = path.resolve();

app.use(express.json())    // To parse the incoming requests with json payloads (from req.body)
app.use(cookieParser());    // To parse the incoming cookie from req.cookies


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


// Before deploying write this code
// This middleware will be served as static files
app.use(express.static(path.join(__dirname, "/frontend/dist")))
// When you will run npm run build under the folder frontend... it will create a folder named dist


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("Hello World!!");
// })


// After implementing socket.io file
// instead of app... write server
server.listen(PORT, () => {
    connectToDB();    
    console.log(`Server running on port ${PORT}`)

})