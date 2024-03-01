import { Server } from "socket.io";
import http from "http";
import express from "express";


// We have deleted this line and writtent it here and exporting it to the server.js file
const app = express();

//  we have built a socket server on top of the express server
const server = http.createServer(app);
// It gives Cors errors
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ["GET", "POST"]
    }
})

export { app, io, server };
