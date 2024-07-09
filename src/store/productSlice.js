import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addInitialProducts: (state, action) => {
            return action.payload;
        }
    },
})

export const productActions = productSlice.actions
export default productSlice