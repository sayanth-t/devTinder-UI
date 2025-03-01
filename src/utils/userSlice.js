import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : "user" ,
    initialState : null ,
    reducers : {
        addUser : ( state , action ) => {
            return action.payload
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