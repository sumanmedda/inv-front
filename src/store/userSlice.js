import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers:{
        addInitialProducts: (state, action) => {
            return action.payload;
        }
    }
})

export const userActions = userSlice.actions
export default userSlice