import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    status: 'false',

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{ 
        // reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.
        //reducers here
        login: (state, action) => {
            state.status = true;
            state.user = action.payload.userData;
            
        },
        logout: (state) => {
            state.status = false;
            state.user = null;
            
        }

    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;