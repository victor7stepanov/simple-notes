import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getDataBase = createAsyncThunk(
    'dataBase/getDataBase',
    async (thunkAPI) => {
        const res = await fetch('/db').then((data) => data.json());
        return res;
    }
)

export const dataBaseSlice = createSlice({
    name: 'dataBase',
    initialState: {
        loadingDataBase: false,
        dataBase: {}
    },
    extraReducers: {
        [getDataBase.pending]: (state) => {
            state.loadingDataBase = true;
        },
        [getDataBase.fulfilled]: (state, { payload }) => {
            state.loadingDataBase = false;
            state.dataBase = payload
        },
        [getDataBase.rejected]: (state) => {
            state.loadingDataBase = false;
        }
    }
})

export default dataBaseSlice.reducer;