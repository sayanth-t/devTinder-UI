import { configureStore } from "@reduxjs/toolkit";

import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionsReducer from './connectionsSlice'
import requestsReducer from './requestsSlice'
import messageReducer from './messageSlice'
import selectedUser from './SelectedUserSlice' ;
import socketReducer from './socketSlice' ;
import onlineUsersReducer from './onlineUserSlice' ;

const appStore = configureStore({
    reducer : {
        user : userReducer ,
        feed : feedReducer ,
        connections : connectionsReducer,
        requests : requestsReducer ,
        message : messageReducer ,
        selectedUser : selectedUser ,
        socket : socketReducer ,
        onlineUsers : onlineUsersReducer
    }
})

export default appStore ;