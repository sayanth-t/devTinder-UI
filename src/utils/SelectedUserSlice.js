import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "selectedUser" ,
    initialState : null ,
    reducers : {
        addSelectedUser : (state,action) => action.payload ,
        removeSelectedUser : () => []
    }

})

export const {addSelectedUser,removeSelectedUser} = chatSlice.actions ;
export default chatSlice.reducer ;