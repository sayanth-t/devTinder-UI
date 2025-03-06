import { configureStore } from "@reduxjs/toolkit";

import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionsReducer from './connectionsSlice'
import requestsReducer from './requestsSlice'
import messageReducer from './messageSlice'
import selectedChat from './SelectedUserSlice' ;

const appStore = configureStore({
    reducer : {
        user : userReducer ,
        feed : feedReducer ,
        connections : connectionsReducer,
        requests : requestsReducer ,
        message : messageReducer ,
        selectedChat : selectedChat
    }
})

export default appStore ;