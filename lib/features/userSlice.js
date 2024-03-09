import { createSlice } from "@reduxjs/toolkit";
import { setUserDetails } from "../hooks";



let initialState = {
    name : null,
    attemptLeft : 5
}

export const userSlice = createSlice({
name : 'user',
initialState,
reducers : {
    setUser : (state,action)=>{
        state.name = action.payload
    },
    setAttempt : (state,action)=>{
        state.attemptLeft = state.attemptLeft-1
    }
}
})

export const {setUser} = userSlice.actions
export default userSlice.reducer