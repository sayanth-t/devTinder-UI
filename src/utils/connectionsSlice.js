import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
    name : "connections" , 
    initialState : [] , 
    reducers : {
        addConnections : (state,action)=>  action.payload ,
        removeUserConnection : (state,action) => state.filter((user) => user._id !== action.payload ) ,
        removeConnections : ()=> null 
    }
})

export const { addConnections , removeConnections , removeUserConnection } = connectionsSlice.actions ;

export default connectionsSlice.reducer