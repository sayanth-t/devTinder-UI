import { createSlice } from '@reduxjs/toolkit'

// const INITIALSTATE = {
//     userData : localStorage.getItem("userData" ) ? JSON.parse(localStorage.getItem("userData")) : null
// } 

const userSlice = createSlice({

    name : "user" ,
    initialState : null ,
    reducers : {
        addUser : ( state , action ) => {
            return action.payload ;
            // const userData = action.payload ;
            // state.userData = userData ;
            
            // // saving to local storage
            // localStorage.setItem("userData",JSON.stringify(userData))  ;

        } , 
        editUser : ( state , action ) => {
            return action.payload
        } , 
        removeUser : (  ) => {
            return null
        }
    }
})

export const { addUser , editUser , removeUser } = userSlice.actions

export default userSlice.reducer