import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name : "feed" , 
    initialState : [] , 
    reducers : {
        addFeed : (state,action) => {
            return action.payload
        } ,
        removeFeedUser : (state,action) => {
            const newFeed  = state.filter((feedUser)=> feedUser._id !== action.payload ) ;
            return newFeed
        } ,
        removeFeed : () => {
            return null
        }
    }

})

export const { addFeed , removeFeed , removeFeedUser } = feedSlice.actions 

export default feedSlice.reducer