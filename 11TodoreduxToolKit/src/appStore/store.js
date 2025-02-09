import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/TodoSlice';

//export default todoSlice.reducer
//importing the reducer from the TodoSlice.js file as default


export const store= configureStore({
    reducer:{
        todos: todoReducer
    }
})