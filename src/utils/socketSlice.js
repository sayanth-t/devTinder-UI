import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
    name : "socket",
    initialState : null , 
    reducers : {
        addSocket : (state,action) => action.payload ,
        removeSocket : (state,action) => null
    }
})

export const {addSocket,removeSocket} = socketSlice.actions
export default socketSlice.reducer