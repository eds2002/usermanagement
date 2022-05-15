import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : false,
}

const displaySlice = createSlice({
    name:'counter',
    initialState: initialState,
    reducers:{
        change: (state) =>{
            state.value = !state.value
        },
    }
})

export const {change} = displaySlice.actions;
export default displaySlice.reducer