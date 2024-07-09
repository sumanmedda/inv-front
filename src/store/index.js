import {configureStore} from '@reduxjs/toolkit'
import productSlice from './productSlice.js'
import userSlice from './userSlice.js'

const invStore = configureStore({
    reducer:{
        product: productSlice.reducer,
        user: userSlice.reducer
    }
})

export default invStore