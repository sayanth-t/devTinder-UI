import { createSlice } from "@reduxjs/toolkit";

const onlineUsers = createSlice({
    name : "onlineUsers" ,
    initialState : [] ,
    reducers : {
        addOnlineUser : (state,action) => action.payload ,
        removeOnlineUser : (state,action) => {
            const users = state.filter( (user)=> user  !== action.payload )  ;
            return users
        }
    }
}) ;

export const { addOnlineUser , removeOnlineUser } = onlineUsers.actions

export default onlineUsers.reducer 