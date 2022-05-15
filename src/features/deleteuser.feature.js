import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

const deleteUserSlice = createSlice({
    name: "deleteUser",
    initialState,
    reducers:{
        changeDeleteModal: (state)=>{
            state.value = !state.value
        }
    }
})

export const {changeDeleteModal} = deleteUserSlice.actions
export default deleteUserSlice.reducer