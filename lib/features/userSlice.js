import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name : null
}

export const userSlice = createSlice({
name : 'user',
initialState,
reducers : {
    setUser : (state,action)=>{
        state.name = action.payload
    }
}
})

export const {setUser} = userSlice.actions
export default userSlice.reducer