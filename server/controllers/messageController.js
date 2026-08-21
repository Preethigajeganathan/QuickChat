import Message from "../models/message.js";
import User from "../models/User.js"

// Get all users except the logged in user
export const getUsersForSidebar = async (req, res) => {
    try {
        const userId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: userId}}).select("-password");
    
    // Count number of messages not seen
    const unseenMessages = {}
    const promises = filteredUsers.map(async (user)=>{
        const messages = await Message.find({senderId: user._id, reciverId: userId,
            seen: false})
            if(messages.length > 0){
                unseenMessages[user._id] = messages.length;
            }
    })
    await Promise.all(promises);
    res.json({success: true, users: filteredUsers, unseenMessages})

    }
    catch (error) {
        console.log(error.mapessage)
        res.json({success: false, message: error.message})
    }
}

// Fet all messages for selected user
export const getMessages = async (req, res) =>{
    try {
        const { id: selectedUserId } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                {senderId: myId, reciverId: selectedUserId},
                {senderId: selectedUserId, reciverId: myId},
            ]
        })
        await Message.updateMany({senderId: selectedUserId, reciverId: myId}, {seen: true});

        res.json({success: true, messages})
    } 
    catch (error) {
        console.log(error.mapessage)
        res.json({success: false, message: error.message})
    }
}

// API to mark message as seen using message id
export const markMessageAsSeen = async (req, res) =>{
    try {
        
    } 
    catch (error) {
        console.log(error.mapessage)
        res.json({success: false, message: error.message})
    }
}