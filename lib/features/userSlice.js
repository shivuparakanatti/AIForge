import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setUserDetails } from "../hooks";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";



let initialState = {
    name : null,
    attemptLeft : 5,
}
onAuthStateChanged(auth, (user) => {
    if (user) {

      //const uid = user.uid;
      initialState = user.email
      // ...
    } else {
     
    }
  });

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
},

})

export const {setUser,setAttempt} = userSlice.actions
export default userSlice.reducer