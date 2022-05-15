import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: false
}

const editUserSlice = createSlice({
    name: "editModal",
    initialState,
    reducers:{
        changeEditState: (state) =>{
            state.display = !state.display
        },
    }
})

export const { changeEditState } = editUserSlice.actions

export default editUserSlice.reducer

