import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name : "message" ,
    initialState : [] ,
    reducers : {
        addMessages : (state,action) => action.payload ,
        removeMessage : () => []
    }

})

export const {addMessages,removeMessage} = messageSlice.actions ;
export default messageSlice.reducer ;