import { createSlice } from "@reduxjs/toolkit"; 

const requestsSlice = createSlice({
    name : "requests" ,
    initialState : [] , 
    reducers : {
        addRequests : ( state , action ) => action.payload ,
        removeRequest : ( state , action ) => {
            const newArr = state.filter((req)=> req._id !== action.payload ) ;
            return newArr
        } ,
        removeRequests : ()=> null
    }
})

export const {addRequests,removeRequest,removeRequests} = requestsSlice.actions ;

export default requestsSlice.reducer ;