import { useContext, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";


export const ChatConext = createContext();

export const ChatProvider = ({ children }) => {

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [unseenMessages, setUnseenMessages] = useState({});

    const {socket,axios} = useContext(AuthContext);

    // function to get all users for sidebar
    const getUsers = async () => {
        try {
            const {data} = await axios.get("/api/messages/users");
            if (data.success) {
                setUsers(data.users)
                setUnseenMessages(data.unseenMessages)
            }
        } 
        catch (error) {
           toast.error(error.message) 
        }
    }

    // funtion to get messages for selected user
    const getMessages = async (userId) => {
        try {
           const {data} = await axios.get(`/api/messages/${userId}`);
           if(data. success){
            setMessages(data.messages)
           }
        } 
        catch (error) {
           toast.error(error.message) 
        }
    }

    const value = {
        f
    }

    return <ChatConext.Provider value={value}>
        { children }
    </ChatConext.Provider>
}