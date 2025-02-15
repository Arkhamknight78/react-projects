import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store=configureStore({
    reducer:{ 
   // The store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it. A store is not a class. It's just an object with a few methods on it.
   //reducer here
        auth: authSlice
    }
})

export default store;