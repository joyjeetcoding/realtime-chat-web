import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",    // This means that mongodb will create the type with ObjectId using the reference of User Model 
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",    // This means that mongodb will create the type with ObjectId using the reference of User Model 
        required: true,
    },
    message: {
        type: String,
        required: true,
    }

    //  created at, updatedat => message.createdAt: 15:30
}, {timestamps: true});


const Message = mongoose.model("Message", messageSchema);

export default Message;