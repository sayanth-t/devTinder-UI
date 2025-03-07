import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name : "message" ,
    initialState : [] ,
    reducers : {
        addMessages : (state,action) => action.payload ,
        addNewMessage : (state,action) => [...state,action.payload] ,
        removeMessage : () => []
    }

})

export const {addMessages,removeMessage,addNewMessage} = messageSlice.actions ;
export default messageSlice.reducer ;