import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:3000"; // my backend URL

let socket ;

export const connectSocket = (userId) => {

    if(!socket){
        socket = io(SOCKET_URL, {
            query : {
                userId // passing userId as query 
            } ,
            autoConnect: false, // Prevent auto-connect
            reconnection: true, // Try reconnecting if disconnected
        });
    }
    return socket ;
    
}

export const getSocket = () => socket