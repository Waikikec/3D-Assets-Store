import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userRequest } from '../utils/requestMethods';

// export const updateUser = createAsyncThunk('users/update', async (id, user) => {
//     console.log(id);
//     console.log(user);
//     const res = await userRequest.put('/users/' + id, user);
//     return res.data;
// });


const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        pending: false,
        error: false,
    },
    reducers: {
        //Login
        loginStart: (state) => {
            state.pending = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.pending = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.pending = false;
            state.error = true;
        },
        //Logout
        logoutSuccess: (state) => {
            state.currentUser = null;
            state.error = false;
        },
        //Register
        registerStart: (state) => {
            state.pending = true;
            state.error = false;
        },
        registerSuccess: (state, action) => {
            state.pending = false;
            state.currentUser = action.payload
        },
        registerFailure: (state) => {
            state.pending = false;
            state.error = true;
        },
        //Update
        updateStart: (state) => {
            state.pending = true;
            state.error = false;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.currentUser = action.payload
        },
        updateFailure: (state) => {
            state.pending = false;
            state.error = true;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logoutSuccess,
    updateStart,
    updateSuccess,
    updateFailure,
} = userSlice.actions;
export default userSlice.reducer;