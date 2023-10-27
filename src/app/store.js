import { configureStore } from "@reduxjs/toolkit";
import userReduer from '../features/userSlice'

export default configureStore({
    reducer: {
        user: userReduer,
    }
})