import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addUsers: (state, param)=>{
            const { payload } = param
            state.users = [payload]
        },
    }
})

export const { addUsers } = usersSlice.actions
export default usersSlice.reducer