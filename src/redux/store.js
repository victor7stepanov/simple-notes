import { configureStore } from '@reduxjs/toolkit';
import dataBaseReducer from './dataBaseSlice';
import authReducer from './authSlice';
import notesReducer from './notesSlice';

export default configureStore({
    reducer: {
        dataBase: dataBaseReducer,
        auth: authReducer,
        notes: notesReducer
    }
})
