import {configureStore} from '@reduxjs/toolkit'
import displayReducer from '../features/adduser.feature'
import editUserReducer from '../features/edituser.feature'
import deleteUserReducer from '../features/deleteuser.feature'
import usersReducer from '../features/users.feature'

export const store = configureStore({
    reducer: {
        display: displayReducer,
        editUserDisplay: editUserReducer,
        deleteUserModal: deleteUserReducer,
        usersArray: usersReducer,
    }
})