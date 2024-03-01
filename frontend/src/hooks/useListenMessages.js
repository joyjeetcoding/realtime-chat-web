import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";
import notification from "../assets/sound/notification.mp3"

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
        // we are listenng to the event newMessages
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;

            // Uncomment this part if you want to use the sound
            // const sound = new Audio(notification);
            // sound.play()

            
            setMessages([...messages, newMessage])
        })

        // when the component unmounts we don't want to listen to this

        // Very necessary to add
        //  we are not going to listen this event more than once... if we don't write this event it will collect every events and will be collected multiple times
        return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])
}

export default useListenMessages