import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name : "feed" , 
    initialState : [] , 
    reducers : {
        addFeed : (state,action) => {
            return action.payload
        } ,
        removeField : () => {
            return null
        }
    }

})

export const { addFeed , removeField } = feedSlice.actions 

export default feedSlice.reducer