import { configureStore } from "@reduxjs/toolkit";
import stadiumReducer from './slice/StadiumSlice'

const store = configureStore({
    reducer: {
        stadium: stadiumReducer
    }
})

export default store;