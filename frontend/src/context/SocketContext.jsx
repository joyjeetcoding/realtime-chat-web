import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
  };

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    // if authenticated user ..then build connection
    if (authUser) {
      // for getting the id we are passing the query
      // userId: authUser._id

      // intead of http://localhost:5000 we need to give the deployed link otherwise the socket.io will not work
      const socket = io("https://realtime-chat-web-pgnf.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);
      // socket.on() is used to listen to the events and can be used to both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      //this will close the socket connection ... when it will get unmounted
      return () => socket.close();
    }
    // if not authenticated then please close the existing socket connection
    else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

// Go to main.jsx and srap it
