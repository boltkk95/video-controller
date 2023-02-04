import { configureStore } from "@reduxjs/toolkit"
import videoReducer from '../Features/Video/VideoSlice'

const store = configureStore({
    reducer: {
        video: videoReducer,
        
    }
})

export default store