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
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

const userSocketMap = {}; // {userId: socketId}

// when user is connected
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  //   It means we are taking the userId whenever there is a connection
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // since we ahve updated the user socket map...
  //   So we will send an event to all connected clients
  //    we can get the info like who is online or offline by grabbing getOnlineUsers
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to the events and can be used to both on client and server side
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);

    // when disconnect.. we are updating the userSocketMap by updating it
    delete userSocketMap[userId];

    // telling the other users by updating that he/she is disconnected 
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
