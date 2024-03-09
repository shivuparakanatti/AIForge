import userSlice from "./features/userSlice"
import { setUserDetails } from "./hooks"

const { configureStore } = require("@reduxjs/toolkit")
export const store = configureStore({
    reducer:{
        user : userSlice
    }

})